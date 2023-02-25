import type { ReactNode } from 'react';

export interface IModal {
  closeModal: () => void;
  heading?: string;
  children?: ReactNode;
}
