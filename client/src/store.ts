import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch; // Type to access dispatch
export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types 
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;