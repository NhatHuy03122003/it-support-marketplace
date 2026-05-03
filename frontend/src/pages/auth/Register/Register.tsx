// src/components/RegistrationForm.tsx
import { useState } from "react";
import { User, Stethoscope, Eye, EyeOff, Check } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type SignUpFormValues } from "./validation";
import { useAuthStore } from "../../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"client" | "expert">("client");
  const { signUp } = useAuthStore();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormValues>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      const { fullname, email, phone, password } = data;
      // Map frontend role to backend role
      const backendRole = role === "client" ? "customer" : role;

      await signUp(fullname, password, email, phone, backendRole);
      // Only navigate if registration succeeds
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      // Don't navigate on error - user stays on registration page
      // Additional error context could be added here if needed
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      id="registration-card"
      className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
    >
      {/* Left side - Visual & Branding */}
      <div
        id="visual-panel"
        className="relative hidden md:block md:w-[40%] bg-[#001849]"
      >
        <img
          id="branding-image"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrk-TNTSolIQLfMJsRmjQeN41zfLvcoqelHrZFAbac8PNJVakevavPNtoSkged7o8ZnEWetVzvdHAwX7crfZstdU9Mi9h6koQybUu7CMACuT5xyqWxzEO7C_6LyxoMYnr4XStIc-NVjOmEJijpQKeQ6lvGM5GkcIDozWRmdfn8dqvdeDo2Uy69tuUp_nl-QFJGVuJzmNMz9y5bGqKA1M_p97K29YAr_urlwd2WOILsRvA2GcYV2iqHdxV39VE_OyQwzpYYTug8P4"
          alt="Healthcare tech"
          referrerPolicy="no-referrer"
        />
        <div
          id="visual-overlay"
          className="absolute inset-0 bg-gradient-to-t from-[#001849] via-[#001849]/20 to-transparent flex flex-col justify-end p-10 text-white"
        >
          <h2 id="hero-title" className="text-3xl font-bold mb-3 leading-tight">
            Chào mừng bạn đến với Clinic of Trust
          </h2>
          <p
            id="hero-subtitle"
            className="text-base opacity-90 font-light leading-relaxed"
          >
            Nền tảng kết nối chuyên gia công nghệ và khách hàng thông minh.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div id="form-panel" className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div id="form-header" className="mb-6 text-center md:text-left">
          <h1
            id="form-title"
            className="text-2xl font-bold text-[#0050cb] mb-1"
          >
            Tạo tài khoản
          </h1>
          <p id="form-subtitle" className="text-slate-500 text-sm">
            Bắt đầu hành trình của bạn ngay hôm nay
          </p>
        </div>

        <form
          id="sign-up-form"
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Role Selection */}
          <div id="role-selection" className="grid grid-cols-2 gap-3">
            <button
              id="role-client"
              type="button"
              onClick={() => setRole("client")}
              className={`flex flex-col items-center p-3 border-2 rounded-xl transition-all duration-200 group ${role === "client"
                ? "border-[#0050cb] bg-[#0050cb]/5 text-[#0050cb]"
                : "border-slate-100 bg-slate-50 text-slate-400 hover:bg-slate-100"
                }`}
            >
              <User
                id="icon-client"
                className={`w-6 h-6 mb-1 ${role === "client" ? "text-[#0050cb]" : "text-slate-400"}`}
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-center">
                Khách hàng
              </span>
            </button>
            <button
              id="role-expert"
              type="button"
              onClick={() => setRole("expert")}
              className={`flex flex-col items-center p-3 border-2 rounded-xl transition-all duration-200 group ${role === "expert"
                ? "border-[#0050cb] bg-[#0050cb]/5 text-[#0050cb]"
                : "border-slate-100 bg-slate-50 text-slate-400 hover:bg-slate-100"
                }`}
            >
              <Stethoscope
                id="icon-expert"
                className={`w-6 h-6 mb-1 ${role === "expert" ? "text-[#0050cb]" : "text-slate-400"}`}
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-center">
                Chuyên gia
              </span>
            </button>
          </div>

          {/* Form Fields */}
          <div
            id="form-fields"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Họ và tên
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0050cb] outline-none bg-[#faf8ff] text-sm"
                placeholder="Nguyễn Văn A"
                type="text"
                {...register("fullname")}
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm">
                  {errors.fullname.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Email
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0050cb] outline-none bg-[#faf8ff] text-sm"
                placeholder="example@clinic.com"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Số điện thoại
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0050cb] outline-none bg-[#faf8ff] text-sm"
                placeholder="090 123 4567"
                type="tel"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0050cb] outline-none bg-[#faf8ff] text-sm pr-10"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3 py-2">
            <div className="relative flex items-center h-5">
              <input
                id="checkbox-terms"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 checked:bg-[#0050cb]"
                type="checkbox"
                {...register("terms")}
              />
              <Check className="absolute left-0 h-5 w-5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none p-1" />
            </div>
            <label
              className="text-xs text-slate-500 leading-tight"
              htmlFor="checkbox-terms"
            >
              Tôi đồng ý với{" "}
              <a className="text-[#0050cb] font-semibold" href="#">
                Điều khoản và Điều kiện
              </a>{" "}
              sử dụng dịch vụ.
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs">
                {errors.terms.message}
              </p>
            )}
          </div>

          <button
            className="w-full py-3.5 bg-[#0050cb] text-white font-bold rounded-full hover:bg-[#003fa4] transition-all text-sm uppercase tracking-widest"
            type="submit"
            disabled={isSubmitting}
          >
            Đăng ký
          </button>

          <p className="text-center text-xs font-medium text-slate-500">
            Đã có tài khoản?{" "}
            <a className="text-[#0050cb] font-bold" href="/login">
              Đăng nhập
            </a>
          </p>
        </form>
      </div>
    </motion.div>
  );
}
