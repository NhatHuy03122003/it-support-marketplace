import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

/**
 * Button component with multiple variants and sizes
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            isLoading = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            className = "",
            disabled = false,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

        const sizeStyles = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-4 py-2.5 text-sm",
            lg: "px-6 py-3 text-base",
        };

        const variantStyles = {
            primary:
                "bg-[#004AC6] text-white hover:bg-[#0040B0] focus:ring-[#004AC6] shadow-md hover:shadow-lg",
            secondary:
                "bg-[#F3F4F6] text-[#191B23] hover:bg-[#E5E7EB] focus:ring-[#D1D5DB]",
            outline:
                "border border-[#E5E7EB] text-[#191B23] hover:bg-[#F9FAFB] focus:ring-[#004AC6]",
            ghost:
                "text-[#191B23] hover:bg-[#F3F4F6] focus:ring-[#004AC6]",
        };

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
                {...props}
            >
                {isLoading && (
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {leftIcon && !isLoading && <span>{leftIcon}</span>}
                {children}
                {rightIcon && !isLoading && <span>{rightIcon}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";
