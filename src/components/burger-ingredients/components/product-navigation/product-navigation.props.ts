import type { TIngredients } from '../../../../services/types/export';

export interface IIngredientsNav {
  tabs: TIngredients[];
  current: string;
  handleClick: (type: string) => void;
}
