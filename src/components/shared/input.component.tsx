import { IInputProps } from "@/lib/definitions/shared/input.definitions";
import { FC } from "react";

const InputComponent: FC<IInputProps> = ({
  name,
  id,
  placeholder,
  type,
  icon,
  errors,
  defaultValue, 
  label
}) => {
  return (
    <div className="relative mb-3">
      (label && <label htmlFor={id}>{label}</label>)
      <label htmlFor={id}></label>
      <input
        type={type ? type : "text"}
        id={id}
        name={name}
        placeholder={placeholder && placeholder}
        className={`
              peer block w-full rounded-2xl py-[15px] pl-10 text-sm outline-2 
              placeholder:text-gray-400 shadow-lg focus:outline-none 
              focus:ring-1 ring-black ${errors && "ring-red-500 focus:ring-red-500 "}`}
        aria-describedby="custom-error"
      />
      {icon && (
        <div className="pointer-events-none absolute left-3 top-5 h-[10px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
          {icon}
        </div>
      )}
      <div
        id="custom-error"
        aria-live="polite"
        aria-atomic="true"
        className="absolute"
      >
        {errors &&
          errors.map((error: string) => (
            <span className="ml-2 text-xs text-red-500" key={error}>
              * {error}
            </span>
          ))}
      </div>
    </div>
  );
};

export default InputComponent;