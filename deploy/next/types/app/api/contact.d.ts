import { NextApiRequest, NextApiResponse } from 'next';

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

export type ContactApiRequest = NextApiRequest & {
  body: ContactFormData;
};

export type ContactApiResponse = NextApiResponse<ContactResponse>;

declare global {
  namespace App.Api {
    export {
      ContactFormData,
      ContactResponse,
      ContactApiRequest,
      ContactApiResponse
    }
  }
} 