import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'

// store is the place all state stored in 1 place to create global state management more easy
export const store = configureStore({
  // reducer is function that responsible to reduce many action to a single state
  reducer: {
    auth: authReducer
  },
});
