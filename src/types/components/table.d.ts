export interface TableColumn<T = any> {
  header: string;
  accessorKey: keyof T | string;
  cell?: (info: { row: T }) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

export interface TableProps<T = any> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
  onRowClick?: (row: T) => void;
  isLoading?: boolean;
  emptyMessage?: string;
  sortable?: boolean;
  pagination?: {
    pageSize: number;
    pageIndex: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export interface TableHeaderProps<T = any> {
  columns: TableColumn<T>[];
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (column: string) => void;
}

export interface TableBodyProps<T = any> {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (row: T) => void;
  isLoading?: boolean;
  emptyMessage?: string;
} 