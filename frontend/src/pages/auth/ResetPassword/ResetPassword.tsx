import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPasswordPage() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // await authServices.resetPassword(
            //   formData.email,
            //   formData.otp,
            //   formData.newPassword
            // );

            alert("Password reset successfully!");
            navigate("/login");
        } catch (error) {
            console.error(error);
            alert("Reset password failed");
        }
    };

    return (
        <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center px-6 py-12">
            <div
                className="w-full max-w-[500px] rounded-2xl bg-white border border-[#E5E7EB] p-8"
                style={{
                    boxShadow:
                        "0 10px 40px -10px rgba(0,74,198,0.15), 0 0 1px 0 rgba(0,0,0,0.05)",
                }}
            >
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                        <LockKeyhole className="w-8 h-8 text-[#004AC6]" />
                    </div>

                    <h1 className="mt-6 text-[38px] leading-[44px] font-bold text-[#111827]">
                        Reset Password
                    </h1>

                    <p className="mt-3 text-[16px] leading-7 text-[#6B7280] max-w-[360px]">
                        Enter the OTP sent to your email and choose a new secure password.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                    {/* Email */}
                    <div>
                        <label className="text-[13px] font-semibold text-[#374151] mb-2 block">
                            Email Address
                        </label>

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="support@enterprise.com"
                                required
                                className="w-full h-[54px] rounded-xl border border-[#D1D5DB] bg-white pl-12 pr-4 text-[15px] outline-none focus:border-[#004AC6] focus:ring-4 focus:ring-[#004AC6]/10 transition-all"
                            />
                        </div>
                    </div>

                    {/* OTP */}
                    <div>
                        <label className="text-[13px] font-semibold text-[#374151] mb-2 block">
                            OTP Code
                        </label>

                        <input
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            placeholder="Enter 6-digit OTP"
                            required
                            className="w-full h-[54px] rounded-xl border border-[#D1D5DB] bg-white px-4 text-[15px] tracking-[4px] outline-none focus:border-[#004AC6] focus:ring-4 focus:ring-[#004AC6]/10 transition-all"
                        />

                        <div className="mt-3 text-sm text-[#6B7280]">
                            Didn&apos;t receive the code?{" "}
                            <button
                                type="button"
                                className="font-semibold text-[#004AC6] hover:underline"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="text-[13px] font-semibold text-[#374151] mb-2 block">
                            New Password
                        </label>

                        <div className="relative">
                            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                placeholder="Enter new password"
                                required
                                className="w-full h-[54px] rounded-xl border border-[#D1D5DB] bg-white pl-12 pr-12 text-[15px] outline-none focus:border-[#004AC6] focus:ring-4 focus:ring-[#004AC6]/10 transition-all"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="text-[13px] font-semibold text-[#374151] mb-2 block">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />

                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                                required
                                className="w-full h-[54px] rounded-xl border border-[#D1D5DB] bg-white pl-12 pr-12 text-[15px] outline-none focus:border-[#004AC6] focus:ring-4 focus:ring-[#004AC6]/10 transition-all"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-2 h-[56px] rounded-xl bg-[#004AC6] text-white text-[16px] font-semibold hover:bg-[#003AA0] transition-all"
                    >
                        Reset Password
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-8 flex justify-center">
                    <Link
                        to="/login"
                        className="text-[#004AC6] font-semibold hover:underline"
                    >
                        ← Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}