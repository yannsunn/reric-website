export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  hasContainer?: boolean;
  bgColor?: 'white' | 'gray' | 'primary' | 'secondary';
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
} 