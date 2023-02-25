import type { IIngredient, IOrder, IUser } from './export';

export interface IIngredientsResponse {
  data: IIngredient[];
  success: boolean;
}

export interface IOrderResponse {
  name: string;
  success: boolean;
  order: IOrder;
}

export interface ILoginResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

// export interface IRefreshTokenResponse {
//   success: boolean;
//   accessToken: string;
//   refreshToken: string;
// }

// export interface IPasswordResponse {
//   success: boolean;
//   message: string;
// }

// export interface IUserResponse {
//   success: boolean;
//   user: IUser;
// }
