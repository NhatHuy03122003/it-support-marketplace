import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../stores/useAuthStore";
import { toast } from "sonner";

export default function CheckEmail() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const email = useState<string>(() => {
    return localStorage.getItem("verifyEmail") || "";
  })[0];
  const [countdown, setCountdown] = useState(0);

  const handleVerify = async () => {
    const code = otp.join("");

    try {
      await useAuthStore.getState().verifyOtp(email, code);

      toast.success("Xác thực thành công!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      ;
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Không tìm thấy email");
      return;
    }

    try {
      await useAuthStore.getState().sendOtp(email);

      // clear old otp
      setOtp(Array(6).fill(""));

      // start cooldown
      setCountdown(60);

      // focus first input
      const firstInput = document.getElementById("otp-0");
      firstInput?.focus();

      toast.success("OTP mới đã được gửi");
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-[440px] bg-white rounded-xl border border-code-border/30 shadow-[0_8px_30px_0_rgba(37,99,235,0.05)] px-10 py-10">

        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-success-green-bg shadow-[0_0_40px_0_rgba(34,197,94,0.15)] flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2 29.2L31.3 15.1L28.5 12.3L17.2 23.6L11.5 17.9L8.7 20.7L17.2 29.2ZM20 40C17.2333 40 14.6333 39.475 12.2 38.425C9.76667 37.375 7.65 35.95 5.85 34.15C4.05 32.35 2.625 30.2333 1.575 27.8C0.525 25.3667 0 22.7667 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.625 12.2 1.575C14.6333 0.525 17.2333 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7667 39.475 25.3667 38.425 27.8C37.375 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40Z" fill="#16A34A" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-[30px] font-bold leading-[38px] tracking-[-0.6px] text-text-dark mb-4">
          Check your email
        </h1>

        {/* Subtitle */}
        <p className="text-center text-base leading-6 text-text-body mb-8 px-1">
          We've sent a verification link and code to your inbox. Please click the link or enter the 6-digit code below.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mb-8">
          {otp.map((value, i) => (
            <input
              key={i}
              maxLength={1}
              value={value}
              onChange={(e) => {
                const newOtp = [...otp];
                newOtp[i] = e.target.value;
                setOtp(newOtp);
                // Auto focus next input
                if (e.target.value && i < 5) {
                  const nextInput = document.getElementById(`otp-${i + 1}`);
                  if (nextInput) nextInput.focus();
                }
              }}
              id={`otp-${i}`}
              className="w-12 h-14 rounded-lg border border-code-border text-center text-2xl font-semibold focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button className="w-full py-3.5 rounded-lg bg-brand-blue text-white text-base leading-6 font-normal shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-[hsl(220,100%,34%)] active:bg-[hsl(220,100%,30%)] transition-colors cursor-pointer"
          onClick={handleVerify}
        >
          Verify Account
        </button>

        {/* Divider + CTA */}
        <div className="mt-8 pt-8 border-t border-code-border/30 flex flex-col items-center gap-4">
          <p className="text-sm leading-5 text-text-body">
            Didn't receive the email?
          </p>

          <button className="flex items-center gap-2 text-brand-blue text-base leading-6 hover:underline cursor-pointer"
            onClick={handleResend}
            disabled={countdown > 0}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12C4.325 12 2.90625 11.4188 1.74375 10.2563C0.58125 9.09375 0 7.675 0 6C0 4.325 0.58125 2.90625 1.74375 1.74375C2.90625 0.58125 4.325 0 6 0C6.8625 0 7.6875 0.178125 8.475 0.534375C9.2625 0.890625 9.9375 1.4 10.5 2.0625V0H12V5.25H6.75V3.75H9.9C9.5 3.05 8.95312 2.5 8.25937 2.1C7.56562 1.7 6.8125 1.5 6 1.5C4.75 1.5 3.6875 1.9375 2.8125 2.8125C1.9375 3.6875 1.5 4.75 1.5 6C1.5 7.25 1.9375 8.3125 2.8125 9.1875C3.6875 10.0625 4.75 10.5 6 10.5C6.9625 10.5 7.83125 10.225 8.60625 9.675C9.38125 9.125 9.925 8.4 10.2375 7.5H11.8125C11.4625 8.825 10.75 9.90625 9.675 10.7437C8.6 11.5812 7.375 12 6 12Z" fill="#004AC6" />
            </svg>
            Resend email
          </button>

          <Link
            to="/login"
            className="text-xs font-medium leading-4 tracking-[1.2px] uppercase text-text-subtle hover:text-text-body transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
