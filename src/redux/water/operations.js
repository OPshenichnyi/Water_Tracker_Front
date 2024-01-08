import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://db-water-tracker.onrender.com/api/";

export const getUserId = (owner) => {
  return { owner };
};

const setJwtHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export let currentDay = null

export const addWaterVolume = createAsyncThunk(
  "water/addWaterVolume",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/water`, data);
      thunkAPI.dispatch(fetchWaterDataToday());
      thunkAPI.dispatch(waterMonts(currentDay));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterVolume = createAsyncThunk(
  "water/updateWaterVolume",
  async ({ waterId, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${waterId}/water-volume`, data);
      thunkAPI.dispatch(fetchWaterDataToday());
      thunkAPI.dispatch(waterMonts(currentDay));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterVolume = createAsyncThunk(
  "water/deleteWaterVolume",
  async (waterId, thunkAPI) => {
    try {
      await axios.delete(`/water/${waterId}`);
      const response = await axios.get("/today");

      thunkAPI.dispatch(waterMonts(currentDay))

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchWaterDataToday = createAsyncThunk(
  "water/fetchWaterDataToday",
  async (_, thunkAPI) => {
    try {
      const userId = getUserId();
      const response = await axios.get(`/today`, {
        params: {
          userId,
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const waterMonts = createAsyncThunk(
  "auth/monts",

  async (date, thunkAPI) => {
    currentDay = date;
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setJwtHeader(persistedToken);
      const res = await axios.get(`/month/${date}`);
      return res.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
