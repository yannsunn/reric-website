/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/compat/navigation" />

declare module 'next' {
  export interface PageConfig {
    amp?: boolean | 'hybrid';
    api?: {
      bodyParser?: boolean | { sizeLimit?: string | number };
      externalResolver?: boolean;
    };
  }
} 