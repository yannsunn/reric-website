export type WithClassName<T = {}> = T & {
  className?: string;
};

export type WithChildren<T = {}> = T & {
  children?: React.ReactNode;
};

export type WithRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type WithOptional<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
};

export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export type Direction = 'top' | 'right' | 'bottom' | 'left';
export type Alignment = 'start' | 'center' | 'end';
export type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'; 