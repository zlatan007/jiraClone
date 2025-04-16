import { configureStore } from '@reduxjs/toolkit'
import commonSlice from './Slices/CommonSlice';


export const store = configureStore({
    reducer: {
      common: commonSlice,
    },
  });