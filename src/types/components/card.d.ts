export interface CardProps {
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  footer?: React.ReactNode;
}

export interface CardListProps {
  items: CardProps[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
} 