import type { rootReducer } from '../reducers';
import type {
  TConstructorActions, TIngredientsActions, TOrderActions, TUserActions, TWsActions,
} from './export';
import type { Action, ActionCreator } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { store } from '../store';

export type TApplicationActions =
| TConstructorActions
| TIngredientsActions
| TOrderActions
| TWsActions
| TUserActions;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;
