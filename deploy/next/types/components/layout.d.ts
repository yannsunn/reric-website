import { ReactNode } from 'react';
import { MetadataProps } from '../app/layout';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
}

export interface MainProps {
  children: ReactNode;
  className?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

export interface SidebarProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export interface NavigationProps {
  className?: string;
  items: Array<{
    label: string;
    href: string;
    icon?: ReactNode;
    external?: boolean;
  }>;
}

export interface BreadcrumbProps {
  className?: string;
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: Array<{
    label: string;
    href?: string;
  }>;
  actions?: ReactNode;
  className?: string;
} 