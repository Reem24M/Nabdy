import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Stethoscope,
  FlaskConical,
  ArrowLeft,
  AlertCircle
} from "lucide-react";
import { useAuth } from "../../context/AuthContext"

// Zod Schemas
const baseSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const patientSchema = baseSchema.extend({
  age: z.string().min(1, "Age is required").regex(/^\d+$/, "Must be a number"),
  nationalId: z.string().min(4, "ID number is required"),
  gender: z.enum(["male", "female", "other"], { message: "Please select gender" }),
});

const doctorSchema = baseSchema.extend({
  specialty: z.string().min(3, "Specialty is required"),
  licenseNumber: z.string().min(5, "Valid license number required"),
});

const labDoctorSchema = baseSchema.extend({
  labName: z.string().min(3, "Lab name is required"),
  labId: z.string().min(4, "Lab ID is required"),
});

export default function Register() {
  const [role, setRole] = useState(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const schema = role === "patient" ? patientSchema :
    role === "doctor" ? doctorSchema :
      role === "labDoctor" ? labDoctorSchema : baseSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    if (!role) return;
    const finalData = { ...data, role };
    signup(role, finalData);

    localStorage.setItem("role", role);
    navigate(`/${role}/dashboard`);
    return;
  };


  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: '#0A1A3A' }}>
        <div className="w-full max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4" style={{ color: '#169CF6' }}>Welcome to Nabdy</h1>
            <p className="text-xl" style={{ color: '#B8C2CC' }}>Choose how you'd like to join us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { role: "patient", title: "Patient", desc: "Book doctors & manage health", icon: User },
              { role: "doctor", title: "Doctor", desc: "Treat patients & grow practice", icon: Stethoscope },
              { role: "labDoctor", title: "Lab Specialist", desc: "Upload reports & results", icon: FlaskConical },
            ].map((item) => (
              <button
                key={item.role}
                onClick={() => setRole(item.role)}
                className="group bg-[#11294B] rounded-3xl shadow-2xl p-10 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-blue-300"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition" style={{ backgroundColor: 'rgba(22, 156, 246, 0.1)' }}>
                  <item.icon className="w-12 h-12" style={{ color: '#169CF6' }} />
                </div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: 'white' }}>{item.title}</h3>
                <p className="mb-6" style={{ color: 'white' }}>{item.desc}</p>
                <span className="inline-block font-bold group-hover:underline transition-all duration-300" style={{ color: '#169CF6' }}>
                  Register as {item.title} →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Role-based config
  const config = {
    patient: { title: "Patient", icon: User },
    doctor: { title: "Doctor", icon: Stethoscope },
    labDoctor: { title: "Lab Specialist", icon: FlaskConical },
  }[role];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: '#0A1A3A' }}>
      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="h-3" style={{ backgroundColor: '#169CF6' }} />
          <div className="p-10">
            <button
              onClick={() => setRole(null)}
              className="flex items-center gap-2 mb-8 transition-all duration-300 hover:underline"
              style={{ color: '#169CF6' }}
            >
              <ArrowLeft className="w-5 h-5" />
              Change Role
            </button>

            <div className="text-center mb-3">
              <div className="inline-flex rounded-3xl p-4 mb-3" style={{ backgroundColor: 'rgba(22, 156, 246, 0.1)' }}>
                <config.icon className="w-8 h-8" style={{ color: '#169CF6' }} />
              </div>
              <h2 className="text-4xl font-bold mb-3" style={{ color: '#0A1A3A' }}>
                Create {config.title} Account
              </h2>
              <p style={{ color: '#0A1A3A' }}>Fill in your information below</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                <InputField label="First Name" {...register("firstname")} error={errors.firstname} />
                <InputField label="Last Name" {...register("lastname")} error={errors.lastname} />
              </div>

              <InputField label="Username" {...register("username")} error={errors.username} />
              <InputField label="Email" type="email" {...register("email")} error={errors.email} />
              <InputField label="Password" type="password" {...register("password")} error={errors.password} />

              {/* Patient Fields */}
              {role === "patient" && (
                <div className="grid grid-cols-2 gap-5">
                  <InputField label="Age" {...register("age")} error={errors.age} />
                  <InputField label="National ID" {...register("nationalId")} error={errors.nationalId} />
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#0A1A3A' }}>Gender</label>
                    <select
                      {...register("gender")}
                      className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{
                        borderColor: errors.gender ? '#EF4444' : '#D1D5DB',
                        focusBorderColor: '#169CF6'
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Doctor Fields */}
              {role === "doctor" && (
                <>
                  <InputField label="Specialty (e.g. Cardiology)" {...register("specialty")} error={errors.specialty} />
                  <InputField label="Medical License Number" {...register("licenseNumber")} error={errors.licenseNumber} />
                </>
              )}

              {/* Lab Doctor Fields */}
              {role === "labDoctor" && (
                <>
                  <InputField label="Laboratory Name" {...register("labName")} error={errors.labName} />
                  <InputField label="Lab ID / Code" {...register("labId")} error={errors.labId} />
                </>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 px-6 text-sm font-semibold mb-4 text-white !rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-70"
                  style={{ backgroundColor: '#169CF6' }}
                  onMouseEnter={(e) => { if (!isSubmitting) e.target.style.backgroundColor = '#1285D6'; }}
                  onMouseLeave={(e) => { if (!isSubmitting) e.target.style.backgroundColor = '#169CF6'; }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Loading...
                    </span>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>

            <p className="mt-8 text-center" style={{ color: '#0A1A3A' }}>
              Already have an account?{" "}
              <Link to="/auth/login" className="font-bold hover:underline transition-all duration-300" style={{ color: '#169CF6' }}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Component
function InputField({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      <label className="block text-xl font-medium" style={{ color: '#0A1A3A' }}>
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          placeholder={label}
          className={`w-full h-9 px-3 text-xs rounded-md border transition-all duration-300 focus:outline-none focus:ring-2 bg-white placeholder-gray-400 ${error
              ? "border-red-500 focus:border-red-600 pr-8"
              : "border-gray-300 focus:border-blue-500"
            }`}
        />

        {error && (
          <AlertCircle className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500 pointer-events-none" />
        )}
      </div>

      {error && (
        <p className="text-red-500 text-[10px] -mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}
