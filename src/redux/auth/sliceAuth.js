import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = require("@reduxjs/toolkit");
const { registration, logIn } = require("./authOperationApi");

const initialState = {
  user: {
    email: null,
    userName: null,
    avatarURL: null,
    gender: null,
    waterRate: null,
  },
  token: null,
  isLogined: false,
  isRefresh: false,
  isRegister: false,
};

const authSlice = createSlice({
  name: "auth", // Оголошуємо рядок ідентифікації
  initialState, // Оголошуємо стейт за замовчуванням
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
  },
});

export const authorizationReducer = authSlice.reducer;
