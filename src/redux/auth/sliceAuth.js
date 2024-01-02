import { createSlice } from "@reduxjs/toolkit";

const {
  registration,
  logIn,
  logOut,
  refreshUser,
  AddAvatar,
} = require("./authOperationApi");

const initialState = {
  user: {
    email: "",
    userName: null,
    avatarURL: null,
    gender: "man",
    waterRate: null,
  },
  token: null,
  isLogined: false,
  isRefresh: false,
  isRegister: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  //0 Створюємо редусер
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isRegister = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogined = true;
      state.isRegister = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = {
        email: null,
        userName: null,
        avatarURL: null,
        gender: null,
        waterRate: null,
      };
      state.isLogined = false;
      state.isRegister = false;
      state.token = null;
    });
    builder.addCase(refreshUser.pending, (state, action) => {
      state.isRefresh = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogined = true;
      state.isRefresh = false;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.isRefresh = false;
    });
    builder.addCase(AddAvatar.fulfilled, (state, action) => {
      state.user.avatarURL = action.payload.avatarURL;
    });
  },
});

export const authorizationReducer = authSlice.reducer;
