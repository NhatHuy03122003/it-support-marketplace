import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  icon: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, icon }) => {
  return (
    <div className="mb-6">
      <label className="mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <i className={`ti ti-${icon} absolute left-4 top-2/4 text-xl text-gray-400 -translate-y-2/4`} />
        <input
          type={type}
          placeholder={placeholder}
          className="py-3 pr-4 pl-12 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
        />
      </div>
    </div>
  );
};
