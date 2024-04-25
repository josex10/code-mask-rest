import { FC, InputHTMLAttributes } from "react";

interface ISelectProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string | null;
  register?: any;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  options?: [{ label: string; value: string }];
}

const SelectComponent: FC<ISelectProps> = ({
  register,
  name,
  error,
  label,
  icon,
  placeholder,
  options,
  ...rest
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative mb-3">
        <select
          className={`
            peer block w-full rounded-2xl py-[15px] pl-10 text-sm outline-2 
            placeholder:text-gray-300 shadow-lg focus:outline-none 
            focus:ring-1 ring-black ${error && "ring-red-500"}`}
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
          {...rest}
          placeholder={placeholder ? placeholder : ""}
        >
          <option className="bg-blue-500" value="">
            {placeholder ? placeholder : "Seleccione"}
          </option>

          {options && options.map(op => (
            <option key={op.value} value={op.value}>{op.label}</option>
          ))}
          
        </select>

        {icon && (
          <div className="pointer-events-none absolute left-3 top-5 h-[10px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
            {icon}
          </div>
        )}

        <div className="absolute">
          {error && (
            <span className="ml-2 text-xs text-red-500" key={error}>
              * {error}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectComponent;
