import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://db-water-tracker.onrender.com/";
const setJwtHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearJwtHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const registration = createAsyncThunk(
  "auth/registretion",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/register", credentials);
      console.log(response);
      setJwtHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logIn = createAsyncThunk(
//   "auth/logined",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post("/users/login", credentials);
//       setJwtHeader(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
