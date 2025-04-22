import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetails: {},
  isAuthenticated: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    checkIsAuthenticated: (state, action) => {
        state.isAuthenticated = action.payload
    }
  },
})

export const { saveUserDetails, checkIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;