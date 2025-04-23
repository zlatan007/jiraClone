import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetails: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserDetails: (state, action) => {
      state.userDetails = action.payload;
    }
  },
})

export const { saveUserDetails } = userSlice.actions;

export default userSlice.reducer;