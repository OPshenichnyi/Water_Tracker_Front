import { createSlice } from "@reduxjs/toolkit";

// const { createSlice } = require("@reduxjs/toolkit");
const { registration } = require("./authOperationApi");

const initialState = {
  user: { email: null, password: null },
  token: null,
  isLogined: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: "auth", // Оголошуємо рядок ідентифікації
  initialState, // Оголошуємо стейт за замовчуванням
  //0 Створюємо редусер
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogined = true;
    });
  },
});

export const authorizationReducer = authSlice.reducer;
