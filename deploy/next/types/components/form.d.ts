import { ReactNode } from 'react';

export interface FormFieldProps {
  name: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  helperText?: string;
}

export interface InputProps extends FormFieldProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

export interface TextareaProps extends FormFieldProps {
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

export interface SelectProps extends FormFieldProps {
  options: Array<{
    label: string;
    value: string | number;
  }>;
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string | number) => void;
  onBlur?: () => void;
}

export interface CheckboxProps extends Omit<FormFieldProps, 'label'> {
  label: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface FormProps {
  onSubmit: (data: any) => void;
  children: ReactNode;
  className?: string;
  loading?: boolean;
} 