import { ReactNode } from 'react';

export * from './api/contact';
export * from './layout';
export * from './page';

declare global {
  namespace App {
    interface PageProps {
      params: {
        [key: string]: string | string[];
      };
      searchParams: {
        [key: string]: string | string[] | undefined;
      };
    }

    interface LayoutProps {
      children: React.ReactNode;
    }

    interface MetadataProps {
      title: string;
      description: string;
      keywords: string[];
    }

    interface BasePageProps {
      children?: ReactNode;
      className?: string;
    }

    interface BaseLayoutProps {
      children: ReactNode;
      className?: string;
    }

    interface BaseComponentProps {
      className?: string;
      id?: string;
    }

    interface MetaTags {
      title: string;
      description: string;
      keywords: string[];
      ogImage?: string;
      noindex?: boolean;
    }
  }
}

export {}; 