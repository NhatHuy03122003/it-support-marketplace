"use client";
import React, { useState } from 'react';

interface UserTypeSelectorProps {}

export const UserTypeSelector: React.FC<UserTypeSelectorProps> = () => {
  const [selectedType, setSelectedType] = useState<'client' | 'technician'>('client');

  return (
    <div className="flex gap-4 mb-8 max-sm:flex-col">
      <button
        onClick={() => setSelectedType('client')}
        className={`flex flex-col flex-1 justify-center items-center p-5 rounded-lg border-2 transition-all ease-in-out cursor-pointer duration ${
          selectedType === 'client'
            ? 'bg-blue-50 border-blue-600'
            : 'border'
        }`}
      >
        <i className="ti ti-user mb-2 text-3xl text-blue-600" />
        <span className={`text-sm font-semibold ${
          selectedType === 'client' ? 'text-blue-600' : 'text-gray-500'
        }`}>
          CLIENT
        </span>
      </button>
      <button
        onClick={() => setSelectedType('technician')}
        className={`flex flex-col flex-1 justify-center items-center p-5 rounded-lg border-2 transition-all ease-in-out cursor-pointer duration ${
          selectedType === 'technician'
            ? 'bg-blue-50 border-blue-600'
            : 'border'
        }`}
      >
        <i className="ti ti-users mb-2 text-3xl text-blue-600" />
        <span className={`text-sm font-semibold ${
          selectedType === 'technician' ? 'text-blue-600' : 'text-gray-500'
        }`}>
          TECHNICIAN
        </span>
      </button>
    </div>
  );
};
