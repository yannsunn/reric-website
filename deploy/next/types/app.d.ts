import { ReactNode } from 'react';

declare global {
  namespace App {
    interface ContactFormData {
      company?: string;
      name: string;
      phone?: string;
      email: string;
      message: string;
    }

    interface ContactResponse {
      success: boolean;
      message: string;
    }

    interface LayoutProps {
      children: ReactNode;
    }

    interface MetadataProps {
      title: string;
      description: string;
      keywords: string[];
    }

    interface PageProps {
      params: {
        [key: string]: string | string[];
      };
      searchParams: {
        [key: string]: string | string[] | undefined;
      };
    }
  }
}

export {}; 