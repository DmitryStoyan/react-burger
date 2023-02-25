import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFillingIngredients extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  check: boolean;
}
