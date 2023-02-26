import { IIngredient } from "../../../../services/types/data";


export interface IProductList {
  items: IIngredient[];
  itemsType: {
    type: string,
    name: string,
  },
}
