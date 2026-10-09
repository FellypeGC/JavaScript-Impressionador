import React from "react";

export const InputField = ({
  label,
  type,
  placeholder,
  autoComplete,
  name,
  error
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={type} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'}`}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error.message}</p>}
    </div>
  );
};
