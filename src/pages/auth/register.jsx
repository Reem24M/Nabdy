import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import Img from '../../../public/bg.jpg'
import {
  User,
  Stethoscope,
  FlaskConical,
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

// Zod Schemas (same validation)
const baseSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  firstname: z.string().min(2, "First name is required"),
  lastname: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const patientSchema = baseSchema.extend({
  age: z.string().min(1, "Age is required").regex(/^\d+$/, "Must be a number"),
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

  
  const schema = role === "patient" ? patientSchema :
    role === "doctor" ? doctorSchema :
      role === "labDoctor" ? labDoctorSchema : baseSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Role:", role);
    console.log("Data:", data);

    // Simulate API call
    return new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      alert("Registration successful!");
      reset();
      setRole(role);
    });
  };

  // Role Selection Screen
  if (!role) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6 
             bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${Img}')`
        }}
      >
        <div className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Nabdy</h1>
            <p className="text-xl text-gray-600">Choose how you'd like to join us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { role: "patient", title: "Patient", desc: "Book doctors & manage health", color: "emerald", icon: User },
              { role: "doctor", title: "Doctor", desc: "Treat patients & grow practice", color: "blue", icon: Stethoscope },
              { role: "labDoctor", title: "Lab Specialist", desc: "Upload reports & results", color: "purple", icon: FlaskConical },
            ].map((item) => (
              <button
                key={item.role}
                onClick={() => setRole(item.role)}
                className="group bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-${item.color}-100 flex items-center justify-center group-hover:scale-110 transition`}>
                  <item.icon className={`w-12 h-12 text-${item.color}-600`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <span className={`inline-block text-${item.color}-600 font-bold group-hover:text-${item.color}-700`}>
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
    patient: { color: "emerald", title: "Patient", icon: User },
    doctor: { color: "blue", title: "Doctor", icon: Stethoscope },
    labDoctor: { color: "purple", title: "Lab Specialist", icon: FlaskConical },
  }[role];

  return (
   <div
        className="min-h-screen flex items-center justify-center p-6 
             bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${Img}')`
        }}
      >
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Gradient Top Bar */}
          <div className={`h-3 bg-gradient-to-r from-${config.color}-500 to-${config.color}-600`} />

          <div className="p-10">
            {/* Back Button */}
            <button
              onClick={() => setRole(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Change Role
            </button>

            {/* Header */}
            <div className="text-center mb-5">
              <div className={`inline-flex  rounded-3xl bg-${config.color}-100 mb-6`}>
                <config.icon className={`w-14 h-14 text-${config.color}-600`} />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                Create {config.title} Account
              </h2>
              <p className="text-gray-600 mt-3">Fill in your information below</p>
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      {...register("gender")}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-4 focus:ring-emerald-500 focus:border-transparent transition"
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

              {/* Submit Button */}
              <div className="flex justify-center">
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-40 h-11 px-6 text-sm  font-semibold mb-4 text-white rounded-full
               bg-blue-600 hover:bg-blue-500 
               shadow-lg transition-all duration-200 
               flex items-center justify-center disabled:opacity-70"
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

            <p className="mt-8 text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/auth/login" className={`font-bold text-${config.color}-600 hover:underline`}>
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
      {/* Label – always visible, tiny but clear */}
      <label className="block text-xl font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          placeholder={label} // fallback for accessibility
          className={`w-full h-9 px-3 text-xs rounded-md border transition-all
            ${error 
              ? "border-red-500 focus:border-red-600 pr-8" 
              : "border-gray-300 focus:border-indigo-500"
            }
            focus:outline-none focus:ring-2 focus:ring-indigo-100 
            bg-white placeholder-gray-400`}
        />

        {/* Error icon inside input */}
        {error && (
          <AlertCircle className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500 pointer-events-none" />
        )}
      </div>

      {/* Error message below */}
      {error && (
        <p className="text-red-500 text-[10px] -mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}