import { FC, InputHTMLAttributes } from "react";

export enum EInputType {
  text='text',
  number='number',
  password='password'
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string | null;
  register?: any;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  type?: EInputType;
}

const InputComponent: FC<IInputProps> = ({
  register,
  name,
  error,
  label,
  icon,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <div className='relative mb-3'>
        <input
          type={type ? type: "text"}
          className={`
            peer block w-full rounded-2xl py-[15px] pl-10 text-sm outline-2 
            placeholder:text-gray-400 shadow-lg focus:outline-none 
            focus:ring-1 ring-black ${error && 'ring-red-500'}`}
          aria-invalid={error ? "true" : "false"}
          {...register(name)}
          {...rest}
          placeholder={placeholder ? placeholder : ""}
        />
        {icon && (
          <div className="pointer-events-none absolute left-3 top-5 h-[10px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
            {icon}
          </div>
        )}
        <div className="absolute">
          {error  && (
            <span className="ml-2 text-xs text-red-500" key={error}>
              * {error}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default InputComponent;
