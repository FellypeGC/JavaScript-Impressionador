export default function FormInput ({ 
  id, 
  fieldName, 
  fieldType, 
  placeholder, 
  required,
  className = "",
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">{fieldName}</label>
      <input 
        className="bg-gray-200 border border-gray-300 rounded-lg text-gray-900 text-sm w-full p-2.5 placeholder-slate-700" 
        id={id} 
        type={fieldType} 
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}