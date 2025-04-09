export interface ContactFormData {
  company?: string;
  name: string;
  phone?: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
} 