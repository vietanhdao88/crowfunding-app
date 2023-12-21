const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdate: (state, action) => ({
      ...state,
      user: action.payload.user,
    }),
  },
});
export const { authLogin, authRegister, authUpdate } = authSlice.actions;
export default authSlice.reducer;
