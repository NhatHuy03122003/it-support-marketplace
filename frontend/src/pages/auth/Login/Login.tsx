import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, SquarePlus } from "lucide-react";
import { motion } from "motion/react";
import GOOGLE from "../../../assets/google.png";
export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[420px]"
    >
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#0050cb] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
            <SquarePlus className="text-white w-7 h-7" />
          </div>
          <h1 className="text-xl font-bold text-black text-center mb-1">
            Bác sĩ Công nghệ
          </h1>
          <p className="text-gray-500 text-[13px] font-medium text-center">
            Chào mừng bạn quay trở lại với Clinic of Trust
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-[10px] font-bold text-gray-800 uppercase tracking-widest ml-1"
            >
              EMAIL
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400 text-[13px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-[10px] font-bold text-gray-800 uppercase tracking-widest ml-1"
            >
              MẬT KHẨU
            </label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-400 text-[13px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                {showPassword ? (
                  <EyeOff className="w-4.5 h-4.5" />
                ) : (
                  <Eye className="w-4.5 h-4.5" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Recover */}
          <div className="flex items-center justify-between py-1">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary/20 transition-all cursor-pointer"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800 transition-colors select-none">
                Ghi nhớ tôi
              </span>
            </label>
            <a
              href="#"
              className="text-[13px] font-bold text-black hover:underline transition-all"
            >
              Quên mật khẩu?
            </a>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#0050cb] text-white font-bold text-sm py-3.5 rounded-full shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all duration-200"
          >
            Đăng nhập
          </motion.button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-gray-400 text-[9px] font-bold uppercase tracking-[2px]">
              Hoặc Đăng nhập với
            </span>
          </div>
        </div>
        {/* Social Logins */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors active:scale-95 duration-200 group">
            <img
              src={GOOGLE}
              alt="Google"
              className="w-5 h-5 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[13px] font-bold text-black group-hover:text-primary transition-colors">
              Google
            </span>
          </button>
        </div>

        {/* Register Redirect */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-[13px] font-medium">
            Chưa có tài khoản?
            <a
              href="#"
              className="text-black font-extrabold hover:underline ml-1 transition-all"
            >
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>
    </motion.main>
  );
}
