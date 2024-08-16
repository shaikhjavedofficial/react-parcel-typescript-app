import AppStateReducer, { setTheme } from './AppSlice';
import {AppState} from "./AppSlice"

describe('AppStateSlice', () => {
  const initialState:AppState = { theme: 'light' };

  it('should handle initial state', () => {
    expect(AppStateReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setTheme', () => {
    const actual = AppStateReducer(initialState, setTheme('dark'));
    expect(actual.theme).toEqual('dark');
  });

  it('should not accept invalid theme values', () => {
    const invalidState = { theme: 'blue' };
  });
});
