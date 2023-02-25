import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFillingBun extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  located: 'top' | 'bottom';
}
