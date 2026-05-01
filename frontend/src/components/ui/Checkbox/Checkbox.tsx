import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: string;
}

/**
 * Checkbox component with optional label and description
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        { label, description, error, className = "", disabled = false, ...props },
        ref
    ) => {
        return (
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={(e) => {
                            // Toggle the checkbox when button is clicked
                            const input = ref as React.RefObject<HTMLInputElement>;
                            if (input?.current) {
                                input.current.checked = !input.current.checked;
                                input.current.dispatchEvent(
                                    new Event("change", { bubbles: true })
                                );
                            }
                        }}
                        disabled={disabled}
                        className={`
              w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center
              transition-colors cursor-pointer
              ${props.checked
                                ? "bg-[#004AC6] border-[#004AC6]"
                                : "bg-white border-[#D1D5DB] hover:border-[#004AC6]"
                            }
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
                    >
                        {props.checked && (
                            <svg
                                width="10"
                                height="8"
                                viewBox="0 0 10 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 4L3.5 6.5L9 1"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>
                    <div className="flex flex-col gap-1">
                        {label && (
                            <label
                                htmlFor={props.id}
                                className="text-sm font-normal text-[#434655] leading-5 cursor-pointer"
                            >
                                {label}
                            </label>
                        )}
                        {description && (
                            <p className="text-xs text-[#737686]">{description}</p>
                        )}
                    </div>
                    <input
                        ref={ref}
                        type="checkbox"
                        className="hidden"
                        disabled={disabled}
                        {...props}
                    />
                </div>
                {error && <span className="text-xs text-red-500 ml-6">{error}</span>}
            </div>
        );
    }
);

Checkbox.displayName = "Checkbox";
