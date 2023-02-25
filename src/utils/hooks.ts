import {
  useSelector as useReduxSelector,
  useDispatch as TypedUseDispatchHook,
} from 'react-redux';

import type { AppDispatch, AppThunk, RootState } from '../services/types/export';
import type { TypedUseSelectorHook } from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => TypedUseDispatchHook<AppDispatch & AppThunk>();
