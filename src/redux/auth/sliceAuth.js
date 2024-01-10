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
    avatarURL: "V",
    gender: "man",
    waterRate: 0,
  },
  token: null,
  isLogined: false,
  isRefresh: false,
  isRegister: false,
  addStatus: null,
  isPending: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAddStatus(state) {
      state.addStatus = null;
    },
  },
  //0 Створюємо редусер
  extraReducers: (builder) => {
    // =====================Registration=============================
    builder.addCase(registration.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isRegister = true;
      state.isPending = false;
      state.addStatus = "succses-register";
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.isPending = false;
      state.addStatus = "error-register";
    });
    // =====================Login====================================
    builder.addCase(logIn.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogined = true;
      state.isRegister = false;
      state.isPending = false;
      state.addStatus = "succses-login";
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isPending = false;
      state.isLogined = false;
      state.addStatus = "error-login";
    });
    // =====================Login====================================
    builder.addCase(logOut.pending, (state, action) => {
      state.isPending = true;
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
      state.isPending = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.isPending = false;
    });
    // =====================Refresh====================================

    builder.addCase(refreshUser.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogined = true;
      // state.isRegister = true;
      state.isRefresh = false;
      state.isPending = false;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.isRefresh = false;
      state.isPending = false;
      state.isLogined = false;
    });
    // ====================Add Avatar ===================
    builder.addCase(AddAvatar.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(AddAvatar.fulfilled, (state, action) => {
      state.user.avatarURL = action.payload.avatarURL;
      state.addStatus = "uploaded";
      state.isPending = false;
    });

    builder.addCase(AddAvatar.rejected, (state, action) => {
      state.addStatus = "error";
      state.isPending = false;
    });
    // ====================Add Settings ===================
    builder.addCase(AddSetingUser.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(AddSetingUser.fulfilled, (state, action) => {
      state.user.userName = action.payload.userName;
      state.user.email = action.payload.email;
      state.user.gender = action.payload.gender;
      state.addStatus = "success";
      state.isPending = false;
    });

    builder.addCase(AddSetingUser.rejected, (state, action) => {
      state.addStatus = "error";
      state.isPending = false;
    });
    // ====================Add Settings ===================
    builder.addCase(saveWaterRate.pending, (state) => {
      state.isRefresh = true;
    });
    builder.addCase(saveWaterRate.fulfilled, (state, action) => {
      state.addStatus = "success";
      state.user.waterRate = action.payload;
      state.isPending = false;
    });
    builder.addCase(saveWaterRate.rejected, (state, action) => {
      state.isPending = false;
      state.addStatus = "success";
    });
  },
});

export const { resetAddStatus } = authSlice.actions;
export const authorizationReducer = authSlice.reducer;
