import React, { useState } from "react";

interface PasswordInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    showPasswordToggle?: boolean;
    rightElement?: React.ReactNode;
}

/**
 * Password input component with show/hide toggle and lock icon
 */
export const PasswordInput = React.forwardRef<
    HTMLInputElement,
    PasswordInputProps
>(
    (
        {
            label,
            error,
            helperText,
            showPasswordToggle = true,
            rightElement,
            className = "",
            disabled = false,
            ...props
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        const lockIcon = (
            <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.66667 17.5C1.20833 17.5 0.815972 17.3368 0.489583 17.0104C0.163194 16.684 0 16.2917 0 15.8333V7.5C0 7.04167 0.163194 6.64931 0.489583 6.32292C0.815972 5.99653 1.20833 5.83333 1.66667 5.83333H2.5V4.16667C2.5 3.01389 2.90625 2.03125 3.71875 1.21875C4.53125 0.40625 5.51389 0 6.66667 0C7.81944 0 8.80208 0.40625 9.61458 1.21875C10.4271 2.03125 10.8333 3.01389 10.8333 4.16667V5.83333H11.6667C12.125 5.83333 12.5174 5.99653 12.8438 6.32292C13.1701 6.64931 13.3333 7.04167 13.3333 7.5V15.8333C13.3333 16.2917 13.1701 16.684 12.8438 17.0104C12.5174 17.3368 12.125 17.5 11.6667 17.5H1.66667ZM1.66667 15.8333H11.6667V7.5H1.66667V15.8333ZM6.66667 13.3333C7.125 13.3333 7.51736 13.1701 7.84375 12.8438C8.17014 12.5174 8.33333 12.125 8.33333 11.6667C8.33333 11.2083 8.17014 10.816 7.84375 10.4896C7.51736 10.1632 7.125 10 6.66667 10C6.20833 10 5.81597 10.1632 5.48958 10.4896C5.16319 10.816 5 11.2083 5 11.6667C5 12.125 5.16319 12.5174 5.48958 12.8438C5.81597 13.1701 6.20833 13.3333 6.66667 13.3333ZM4.16667 5.83333H9.16667V4.16667C9.16667 3.47222 8.92361 2.88194 8.4375 2.39583C7.95139 1.90972 7.36111 1.66667 6.66667 1.66667C5.97222 1.66667 5.38194 1.90972 4.89583 2.39583C4.40972 2.88194 4.16667 3.47222 4.16667 4.16667V5.83333ZM1.66667 15.8333V7.5V15.8333Z"
                    fill="#737686"
                />
            </svg>
        );

        const eyeOpenIcon = (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        );

        const eyeClosedIcon = (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <line
                    x1="1"
                    y1="1"
                    x2="23"
                    y2="23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        );

        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label
                        htmlFor={props.id}
                        className="text-xs font-medium text-[#737686] leading-4"
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex-shrink-0">
                        {lockIcon}
                    </span>
                    <input
                        ref={ref}
                        type={showPassword ? "text" : "password"}
                        disabled={disabled}
                        className={`
              w-full rounded-lg border bg-white text-sm font-normal outline-none
              transition-colors
              pl-10 ${rightElement ? "pr-12" : "pr-4"} py-[13px] pb-[14px]
              ${error
                                ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                : "border-[#E5E7EB] text-[#191B23] placeholder-[#6B7280] focus:border-[#004AC6] focus:ring-1 focus:ring-[#004AC6]"
                            }
              ${disabled ? "bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed" : ""}
              ${className}
            `}
                        {...props}
                    />
                    {showPasswordToggle && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#737686] hover:text-[#434655] transition-colors flex-shrink-0"
                            tabIndex={-1}
                            disabled={disabled}
                        >
                            {showPassword ? eyeClosedIcon : eyeOpenIcon}
                        </button>
                    )}
                    {rightElement && !showPasswordToggle && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            {rightElement}
                        </div>
                    )}
                </div>
                {error && <span className="text-xs text-red-500">{error}</span>}
                {helperText && !error && (
                    <span className="text-xs text-[#737686]">{helperText}</span>
                )}
            </div>
        );
    }
);

PasswordInput.displayName = "PasswordInput";
