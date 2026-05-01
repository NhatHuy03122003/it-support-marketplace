import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    helperText?: string;
}

/**
 * Input component with optional label, icon, and error state
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            icon,
            helperText,
            className = "",
            disabled = false,
            ...props
        },
        ref
    ) => {
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
                    {icon && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex-shrink-0">
                            {icon}
                        </span>
                    )}
                    <input
                        ref={ref}
                        disabled={disabled}
                        className={`
              w-full rounded-lg border bg-white text-sm font-normal outline-none
              transition-colors
              ${icon ? "pl-10" : "pl-4"} pr-4 py-[13px] pb-[14px]
              ${error
                                ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                                : "border-[#E5E7EB] text-[#191B23] placeholder-[#6B7280] focus:border-[#004AC6] focus:ring-1 focus:ring-[#004AC6]"
                            }
              ${disabled ? "bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed" : ""}
              ${className}
            `}
                        {...props}
                    />
                </div>
                {error && <span className="text-xs text-red-500">{error}</span>}
                {helperText && !error && (
                    <span className="text-xs text-[#737686]">{helperText}</span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
