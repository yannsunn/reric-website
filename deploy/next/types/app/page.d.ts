import { ReactNode } from 'react';
import { NextPage } from 'next';

export interface PageProps {
  params: {
    [key: string]: string | string[];
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
  children?: ReactNode;
  className?: string;
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export interface NotFoundPageProps {
  className?: string;
}

export type PageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

declare global {
  namespace App {
    export {
      PageProps,
      ErrorPageProps,
      NotFoundPageProps,
      PageWithLayout
    }
  }
} 