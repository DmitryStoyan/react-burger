export interface IIngredientState {
  isIngredientDetailsOpened ?: boolean ;
  viewedIngredient: IIngredient | null;
}

export type TIngredients = {
  type: string;
  name: string;
};
export interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
  uId?: string;
  qty?: number;
}
export interface IOwner {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
export interface IOrder {
  orders: IOrder[];
  total: number;
  totalToday: number;
  createdAt: string;
  ingredients: IIngredient[];
  name: string;
  number: number;
  price: number;
  status: string;
  updatedAt: string;
  _id: string;
  owner: IOwner;
}
export interface IError {
  success: boolean;
  message: string;
}
export interface IUser {
  email: string;
  name: string;
}
