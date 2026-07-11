import { useState } from "react";
import { toast } from "sonner";
import { useAuthStore } from "../../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await useAuthStore.getState().sendOtp(email);

            localStorage.setItem("resetEmail", email);

            toast.success("Reset OTP sent!");

            navigate("/reset-password");

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Failed to send OTP");
        }
    };
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
            <div
                className="w-full max-w-[440px] rounded-xl border border-[#F3F4F6] bg-white p-6 flex flex-col gap-10"
                style={{ boxShadow: "0 10px 40px -10px rgba(0,74,198,0.15), 0 0 1px 0 rgba(0,0,0,0.05)" }}
            >
                {/* Icon & Header */}
                <div className="flex flex-col items-center gap-2">
                    {/* Icon circle */}
                    <div className="flex w-12 items-center justify-center rounded-full bg-[#DBE1FF] py-2.5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 23.3333C10.0528 23.3333 8.53611 23.0271 7.11667 22.4146C5.69722 21.8021 4.4625 20.9708 3.4125 19.9208C2.3625 18.8708 1.53125 17.6361 0.91875 16.2167C0.30625 14.7972 0 13.2806 0 11.6667H2.33333C2.33333 12.95 2.57639 14.1604 3.0625 15.2979C3.54861 16.4354 4.21458 17.4271 5.06042 18.2729C5.90625 19.1187 6.89792 19.7896 8.03542 20.2854C9.17292 20.7812 10.3833 21.0292 11.6667 21.0292C14.2722 21.0292 16.4792 20.125 18.2875 18.3167C20.0958 16.5083 21 14.3014 21 11.6958C21 9.09028 20.0958 6.88333 18.2875 5.075C16.4792 3.26667 14.2722 2.3625 11.6667 2.3625C9.93611 2.3625 8.36597 2.78542 6.95625 3.63125C5.54653 4.47708 4.43333 5.6 3.61667 7H7V9.33333H0V2.33333H2.33333V4.66667C3.40278 3.24722 4.74444 2.11458 6.35833 1.26875C7.97222 0.422917 9.74167 0 11.6667 0C13.2806 0 14.7972 0.30625 16.2167 0.91875C17.6361 1.53125 18.8708 2.3625 19.9208 3.4125C20.9708 4.4625 21.8021 5.69722 22.4146 7.11667C23.0271 8.53611 23.3333 10.0528 23.3333 11.6667C23.3333 13.2806 23.0271 14.7972 22.4146 16.2167C21.8021 17.6361 20.9708 18.8708 19.9208 19.9208C18.8708 20.9708 17.6361 21.8021 16.2167 22.4146C14.7972 23.0271 13.2806 23.3333 11.6667 23.3333ZM9.33333 16.3333C9.00278 16.3333 8.72569 16.2215 8.50208 15.9979C8.27847 15.7743 8.16667 15.4972 8.16667 15.1667V11.6667C8.16667 11.3361 8.27847 11.059 8.50208 10.8354C8.72569 10.6118 9.00278 10.5 9.33333 10.5V9.33333C9.33333 8.69167 9.56181 8.14236 10.0188 7.68542C10.4757 7.22847 11.025 7 11.6667 7C12.3083 7 12.8576 7.22847 13.3146 7.68542C13.7715 8.14236 14 8.69167 14 9.33333V10.5C14.3306 10.5 14.6076 10.6118 14.8313 10.8354C15.0549 11.059 15.1667 11.3361 15.1667 11.6667V15.1667C15.1667 15.4972 15.0549 15.7743 14.8313 15.9979C14.6076 16.2215 14.3306 16.3333 14 16.3333H9.33333ZM10.5 10.5H12.8333V9.33333C12.8333 9.00278 12.7215 8.72569 12.4979 8.50208C12.2743 8.27847 11.9972 8.16667 11.6667 8.16667C11.3361 8.16667 11.059 8.27847 10.8354 8.50208C10.6118 8.72569 10.5 9.00278 10.5 9.33333V10.5Z" fill="#004AC6" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col items-center pt-2">
                        <h1 className="text-[30px] font-bold leading-[38px] tracking-[-0.6px] text-[#191B23] text-center">
                            Forgot Password?
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-[16px] font-normal leading-6 text-[#434655] text-center max-w-[362px]">
                        No worries, we'll send you reset instructions to your secure IT account.
                    </p>
                </div>

                {/* Form Section */}
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Email Field */}
                        <div className="flex flex-col gap-0">
                            <label className="text-[12px] font-medium leading-4 text-[#434655] mb-1 pl-1">
                                Professional Email Address
                            </label>
                            <div className="relative">
                                {/* Email icon */}
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H15C15.4583 0 15.8507 0.163194 16.1771 0.489583C16.5035 0.815972 16.6667 1.20833 16.6667 1.66667V11.6667C16.6667 12.125 16.5035 12.5174 16.1771 12.8438C15.8507 13.1701 15.4583 13.3333 15 13.3333H1.66667ZM8.33333 7.5L1.66667 3.33333V11.6667H15V3.33333L8.33333 7.5ZM8.33333 5.83333L15 1.66667H1.66667L8.33333 5.83333ZM1.66667 3.33333V1.66667V3.33333V11.6667V3.33333Z" fill="#737686" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="e.g. support@enterprise.com"
                                    className="w-full h-[50px] rounded-lg border border-[#C3C6D7] bg-white pl-11 pr-4 text-[16px] text-[#191B23] placeholder-[rgba(115,118,134,0.5)] outline-none focus:border-[#004AC6] focus:ring-2 focus:ring-[#004AC6]/20 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#004AC6] px-4 py-3 text-[14px] font-semibold leading-5 tracking-[0.14px] text-white hover:bg-[#003DA8] active:bg-[#003090] transition-colors"
                        >
                            <span>Send Reset Link</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z" fill="white" />
                            </svg>
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center gap-4 py-4">
                        <div className="flex w-12 h-12 items-center justify-center rounded-full bg-green-100">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[16px] font-medium text-[#191B23] text-center">
                            Reset link sent!
                        </p>
                        <p className="text-[14px] text-[#434655] text-center">
                            Check your inbox at <span className="font-medium text-[#004AC6]">{email}</span>
                        </p>
                        <button
                            onClick={() => { setSubmitted(false); setEmail(""); }}
                            className="mt-2 text-[12px] font-medium text-[#004AC6] hover:underline"
                        >
                            Try a different email
                        </button>
                    </div>
                )}

                {/* Secondary Actions */}
                <div className="flex flex-col items-center pt-6 border-t border-[#F3F4F6]">
                    <a
                        href="mailto:security@enterprise.com"
                        className="flex items-center gap-1 text-[#004AC6] hover:opacity-80 transition-opacity"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.80417 9.33333C6.00833 9.33333 6.1809 9.26285 6.32188 9.12187C6.46285 8.9809 6.53333 8.80833 6.53333 8.60417C6.53333 8.4 6.46285 8.22743 6.32188 8.08646C6.1809 7.94549 6.00833 7.875 5.80417 7.875C5.6 7.875 5.42743 7.94549 5.28646 8.08646C5.14549 8.22743 5.075 8.4 5.075 8.60417C5.075 8.80833 5.14549 8.9809 5.28646 9.12187C5.42743 9.26285 5.6 9.33333 5.80417 9.33333ZM5.27917 7.0875H6.35833C6.35833 6.76667 6.39479 6.51389 6.46771 6.32917C6.54062 6.14444 6.74722 5.89167 7.0875 5.57083C7.34028 5.31806 7.53958 5.07743 7.68542 4.84896C7.83125 4.62049 7.90417 4.34583 7.90417 4.025C7.90417 3.48056 7.70486 3.0625 7.30625 2.77083C6.90764 2.47917 6.43611 2.33333 5.89167 2.33333C5.3375 2.33333 4.88785 2.47917 4.54271 2.77083C4.19757 3.0625 3.95694 3.4125 3.82083 3.82083L4.78333 4.2C4.83194 4.025 4.94132 3.83542 5.11146 3.63125C5.2816 3.42708 5.54167 3.325 5.89167 3.325C6.20278 3.325 6.43611 3.41007 6.59167 3.58021C6.74722 3.75035 6.825 3.9375 6.825 4.14167C6.825 4.33611 6.76667 4.5184 6.65 4.68854C6.53333 4.85868 6.3875 5.01667 6.2125 5.1625C5.78472 5.54167 5.52222 5.82847 5.425 6.02292C5.32778 6.21736 5.27917 6.57222 5.27917 7.0875ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667ZM5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5Z" fill="#004AC6" />
                        </svg>
                        <span className="text-[12px] font-medium leading-4">Contact security desk</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
