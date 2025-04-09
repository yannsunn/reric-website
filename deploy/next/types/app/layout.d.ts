import { ReactNode } from 'react';
import { Metadata } from 'next';

export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export interface MetadataProps extends Metadata {
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export interface HeaderProps {
  className?: string;
  transparent?: boolean;
}

export interface FooterProps {
  className?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
}

declare global {
  namespace App {
    export {
      LayoutProps,
      MetadataProps,
      HeaderProps,
      FooterProps,
      NavigationItem
    }
  }
} 