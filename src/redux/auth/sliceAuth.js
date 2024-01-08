import { createSlice } from "@reduxjs/toolkit";

const {
  registration,
  logIn,
  logOut,
  refreshUser,
  AddAvatar,
  AddSetingUser,
  saveWaterRate,

} = require("./authOperationApi");

const initialState = {
  user: {
    email: "",
    userName: "",
    avatarURL: "",
    gender: "man",
    waterRate: 0,
  },
  token: null,
  isLogined: false,
  isRefresh: false,
  isRegister: false,
  error: null,
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
    builder.addCase(AddSetingUser.fulfilled, (state, action) => {
      state.user.userName = action.payload.userName;
      state.user.email = action.payload.email;
      state.user.gender = action.payload.gender;
    });
      builder.addCase(saveWaterRate.pending, (state) => {
        state.isRefresh = true;
        state.error = null;
      });
      builder.addCase(saveWaterRate.fulfilled, (state, action) => {
        state.isRefresh = false;
        state.user.waterRate = action.payload;
      });
      builder.addCase(saveWaterRate.rejected, (state, action) => {
        state.isRefresh = false;
        state.error = action.error.message;
      })
  },
});

export const authorizationReducer = authSlice.reducer;
