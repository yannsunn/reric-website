export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavProps {
  items: NavItem[];
  className?: string;
}

export interface NavLinkProps extends NavItem {
  className?: string;
  onClick?: () => void;
} 