import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface AppState {
  theme: 'light' | 'dark';
}

export const initialState: AppState = {
  theme: 'light',
};

const AppStateSlice = createSlice({
  name: 'AppState',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.theme = action.payload;
    },
  },
});
export const AppStateSelector = (state: RootState) => state.AppState.theme
export const { setTheme } = AppStateSlice.actions;
export default AppStateSlice.reducer;
