import { InputHTMLAttributes } from "react";

export enum EInputType {
  text = "text",
  number = "number",
  password = "password",
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  type?: EInputType;
  placeholder?: string;
  icon?: React.ReactNode;
  errors?: string[] | null;
}
