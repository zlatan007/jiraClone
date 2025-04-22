import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './Slices/CommonSlice';
import userSlice from './Slices/AuthSlice';


export const store = configureStore({
    reducer: {
      // common: commonSlice,
      authUserDetails: userSlice,
    },
  });