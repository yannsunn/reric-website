import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  className?: string;
  helperText?: string;
}

export interface InputFieldProps extends FormFieldProps, InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'url' | 'date';
}

export interface TextAreaFieldProps extends FormFieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

export interface SelectFieldProps extends FormFieldProps, SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    label: string;
    value: string | number;
  }[];
  placeholder?: string;
}

export interface CheckboxFieldProps extends Omit<InputFieldProps, 'type'> {
  checked?: boolean;
}

export interface FormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
} 