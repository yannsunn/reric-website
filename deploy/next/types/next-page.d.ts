import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

declare global {
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

export {}; 