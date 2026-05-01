import React from "react";

interface DividerProps {
    label?: string;
    className?: string;
}

/**
 * Divider component with optional centered label
 */
export const Divider: React.FC<DividerProps> = ({ label, className = "" }) => {
    if (!label) {
        return <div className={`h-px bg-[#F3F4F6] ${className}`} />;
    }

    return (
        <div className={`relative flex items-center ${className}`}>
            <div className="flex-1 border-t border-[#F3F4F6]" />
            <div className="px-4 bg-white">
                <span className="text-xs font-normal text-[#737686] leading-4 uppercase tracking-wide">
                    {label}
                </span>
            </div>
            <div className="flex-1 border-t border-[#F3F4F6]" />
        </div>
    );
};

Divider.displayName = "Divider";
