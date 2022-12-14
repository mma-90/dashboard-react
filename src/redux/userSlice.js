import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    fetching: false,
    success: false,
    error: false,
  },

  reducers: {
    loginFetching(state) {
      state.fetching = true;
      state.success = false;
      state.error = false;
    },

    loginFailure(state) {
      state.success = false;
      state.fetching = false;
      state.error = true;
      state.user = {};
    },

    loginSuccessful(state, action) {
      state.fetching = false;
      state.error = false;
      state.success = true;
      state.currentUser = action.payload.user;
    },

    reset(state) {
      state.currentUser = {};
      state.fetching = false;
      state.success = false;
      state.error = false;
    },
  },
});

export const { loginFetching, loginFailure, loginSuccessful, reset } =
  userSlice.actions;

export default userSlice.reducer;
