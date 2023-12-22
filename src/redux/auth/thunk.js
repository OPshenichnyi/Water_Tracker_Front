import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateWaterRate } from 'API/authAPI';

export const updateWaterRateThunk = createAsyncThunk(
  'auth/updateWaterRate',
  async (newWaterRate, { rejectWithValue }) => {
    try {
      const rate = Number(newWaterRate) * 1000;
      const { waterRate } = await updateWaterRate(rate);
      return waterRate;
    } catch (error) {
      alert.error(
        'Sorry, but updating your water rate failed. Try again later'
      );
      return rejectWithValue(error.message);
    }
  }
);
