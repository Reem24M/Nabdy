import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

import { toast } from "sonner";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(100),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data) => {
    if (data.email === "omar@gmail.com") { login("patient"); navigate(`/patient/dashboard`); return; }
    else if (data.email === "mohammed@gmail.com") { login("doctor"); navigate(`/doctor/dashboard`); return; }
    else if (data.email === "anas@gmail.com") { login("labDoctor"); navigate(`/labDoctor/dashboard`); return; }
    else toast.error("Invalid email or password", { position: "top-center" });


  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundColor: '#0A1A3A',
      }}
    >
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6' }}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full opacity-5 animate-pulse" style={{ backgroundColor: '#169CF6', animationDelay: '1.5s' }}></div>
      </div> */}

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 relative z-10">

        {/* Icon + Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 rounded-full mb-4" style={{ backgroundColor: 'rgba(22, 156, 246, 0.1)' }}>
            <LogIn className="w-8 h-8" style={{ color: '#169CF6' }} />
          </div>
          <h2 className="text-xl font-bold" style={{ color: '#0A1A3A' }}>Login to Your Account</h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Email */}
          <div>
            <label className="block font-medium mb-2" style={{ color: '#0A1A3A' }}>Email</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
                }`}
              style={{
                borderColor: errors.email ? '#EF4444' : '#D1D5DB',
                focusBorderColor: '#169CF6'
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-2" style={{ color: '#0A1A3A' }}>Password</label>
            <input
              type="password"
              {...register("password")}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
                }`}
              style={{
                borderColor: errors.password ? '#EF4444' : '#D1D5DB',
                focusBorderColor: '#169CF6'
              }}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <p className="text-sm text-right">
            <Link
              to="/auth/forgetpassword"
              className="hover:underline transition-all duration-300"
              style={{ color: '#169CF6' }}
            >
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            className="w-full py-2 font-semibold !rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            style={{
              backgroundColor: '#169CF6',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1285D6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#169CF6';
            }}
          >
            Login
          </button>

          <p className="mt-6 text-center" style={{ color: '#0A1A3A' }}>
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="font-semibold hover:underline transition-all duration-300"
              style={{ color: '#169CF6' }}
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}