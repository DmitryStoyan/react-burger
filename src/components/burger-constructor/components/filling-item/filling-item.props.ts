import type { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import type { IIngredient } from '../../../../services/types/data';

export interface IFillingItem extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: IIngredient;
  deleteHandler: (item: IIngredient) => void;
  index: number;
}
