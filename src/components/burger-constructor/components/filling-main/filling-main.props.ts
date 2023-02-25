import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFillingMain extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  check: boolean;
}
