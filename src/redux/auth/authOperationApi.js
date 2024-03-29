import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  currentDay,
  fetchWaterDataToday,
  waterMonts,
} from "../water/operations";
import { toast } from "react-toastify";

//  ==============Settings AXIOS =======================
axios.defaults.baseURL = "https://db-water-tracker.onrender.com/api/";

//  =========== Function add JWT token in headers ============
const setJwtHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//  =========== Function clear JWT token is headers ============
const clearJwtHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

//  ==============Function Registration =======================
export const registration = createAsyncThunk(
  "auth/registretion",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/register", credentials);
      return response.data;
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 409) {
        toast.error("🤬 This email is already registered 🤬");
      }
      toast.error("🤬 UPS ERROR 🤬");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//  ==============Function Login =======================
export const logIn = createAsyncThunk(
  "auth/logined",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setJwtHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error("🤬 UPS ERROR 🤬");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//  ==============Function Logout =======================

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearJwtHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//  ==============Function RefreshTokenUser =======================
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setJwtHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  ==============Function add Avatar URL =======================
export const AddAvatar = createAsyncThunk(
  "auth/avatar",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch("/users/avatars", credentials, {
        headers: {
          avatarURL: "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//  ==============Function add Info User =======================

export const AddSetingUser = createAsyncThunk(
  "auth/settings",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch("/users", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const saveWaterRate = createAsyncThunk(
  "auth/saveWater",
  async (calculatedResult, thunkAPI) => {
    try {
      const response = await axios.patch("/users/water-rate", {
        waterRate: Number(calculatedResult),
      });
      thunkAPI.dispatch(refreshUser());
      thunkAPI.dispatch(fetchWaterDataToday());
      thunkAPI.dispatch(waterMonts(currentDay));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sleep = () => {
  axios.get("/users/sleep");
};
// ===============================================================
