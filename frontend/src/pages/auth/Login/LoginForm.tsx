import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/ui/Input/Input";
import { PasswordInput } from "../../../components/ui/PasswordInput/PasswordInput";
import { Checkbox } from "../../../components/ui/Checkbox/Checkbox";
import { Button } from "../../../components/ui/Button/Button";
import { Divider } from "../../../components/ui/Divider/Divider";
import type { LoginFormData, LoginFormErrors } from "../../../types/auth";

/**
 * LoginForm component - handles user authentication
 */
export const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [errors, setErrors] = useState<LoginFormErrors>({});

    /**
     * Validate form inputs
     */
    const validateForm = (): boolean => {
        const newErrors: LoginFormErrors = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Handle input changes
     */
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof LoginFormData
    ) => {
        const value =
            field === "rememberMe" ? e.target.checked : e.target.value;
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Clear error when user starts typing
        if (errors[field as keyof LoginFormErrors]) {
            setErrors((prev) => ({
                ...prev,
                [field]: undefined,
            }));
        }
    };

    /**
     * Handle form submission
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // TODO: Replace with actual API call
            console.log("Login attempt:", {
                email: formData.email,
                password: formData.password,
                rememberMe: formData.rememberMe,
            });

            // On success, redirect to dashboard
            navigate("/dashboard");
        } catch (error) {
            console.error("Login error:", error);
            setErrors({
                email: "Invalid credentials. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Handle Google sign-in
     */
    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            // TODO: Implement Google OAuth
            console.log("Google sign-in clicked");
        } finally {
            setIsLoading(false);
        }
    };

    const arrowIcon = (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75Z"
                fill="currentColor"
            />
        </svg>
    );

    return (
        <div className="flex flex-col gap-8 p-10 rounded-xl border border-[#F3F4F6] bg-white w-full max-w-[440px]" style={{
            boxShadow:
                "0 8px 30px 0 rgba(37, 99, 235, 0.08), 0 0 1px 0 rgba(37, 99, 235, 0.10)",
        }}>
            {/* Header */}
            <div className="flex flex-col gap-2 items-center text-center">
                <h1 className="text-[30px] font-bold leading-[38px] tracking-[-0.6px] text-[#191B23]">
                    Welcome Back
                </h1>
                <p className="text-sm font-normal text-[#434655] leading-5">
                    Access your IT infrastructure hub
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-2">
                {/* Email Input */}
                <Input
                    id="email"
                    type="email"
                    label="Email Address"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    error={errors.email}
                    icon={
                        <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H15C15.4583 0 15.8507 0.163194 16.1771 0.489583C16.5035 0.815972 16.6667 1.20833 16.6667 1.66667V11.6667C16.6667 12.125 16.5035 12.5174 16.1771 12.8438C15.8507 13.1701 15.4583 13.3333 15 13.3333H1.66667ZM8.33333 7.5L1.66667 3.33333V11.6667H15V3.33333L8.33333 7.5ZM8.33333 5.83333L15 1.66667H1.66667L8.33333 5.83333ZM1.66667 3.33333V1.66667V3.33333V11.6667V3.33333Z"
                                fill="#737686"
                            />
                        </svg>
                    }
                />

                {/* Password Input */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <label
                            htmlFor="password"
                            className="text-xs font-medium text-[#737686] leading-4"
                        >
                            Password
                        </label>
                        <button
                            type="button"
                            onClick={() => navigate("/forgot-password")}
                            className="text-xs font-medium text-[#004AC6] leading-4 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <PasswordInput
                        id="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange(e, "password")}
                        error={errors.password}
                        showPasswordToggle={true}
                    />
                </div>

                {/* Remember Me Checkbox */}
                <Checkbox
                    id="rememberMe"
                    label="Remember me for 30 days"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange(e, "rememberMe")}
                />

                {/* Sign In Button */}
                <Button
                    type="submit"
                    fullWidth
                    isLoading={isLoading}
                    rightIcon={arrowIcon}
                >
                    Sign In to Dashboard
                </Button>

                {/* Divider */}
                <Divider label="OR CONTINUE WITH" />

                {/* Google Sign In Button */}
                <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    leftIcon={
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/f7cfcaf5f729edea82ccf88a8031a9414a6ce5da?width=40"
                            alt="Google"
                            className="w-5 h-5"
                        />
                    }
                >
                    Continue with Google
                </Button>

                {/* Sign Up Link */}
                <div className="text-center">
                    <span className="text-sm font-normal text-[#434655]">
                        Don't have an account?{" "}
                    </span>
                    <button
                        type="button"
                        onClick={() => navigate("/signup")}
                        className="text-sm font-semibold text-[#004AC6] hover:underline"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
};

LoginForm.displayName = "LoginForm";
