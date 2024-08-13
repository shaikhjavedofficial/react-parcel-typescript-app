import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import AppReducer from './AppSlice';

const rootReducer = combineReducers({
  AppState: AppReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
