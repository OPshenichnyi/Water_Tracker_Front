import { createSlice } from '@reduxjs/toolkit';
import { addWaterVolume, deleteWaterVolume, updateWaterVolume, fetchWaterDataToday } from './operations';

import { getUserId } from '../water/operations';

 const waterSlice = createSlice({ 
  name: 'water',
  initialState: {
    data: {
      waterVolume: 0,
      date: new Date().toISOString(),
      owner: null, 
    },
    history: [], 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWaterVolume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWaterVolume.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addWaterVolume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateWaterVolume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaterVolume.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateWaterVolume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteWaterVolume.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWaterVolume.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteWaterVolume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchWaterDataToday.fulfilled, (state, action) => {
        state.loading = false;

        const userData = getUserId(action.payload.waterRecords[0].owner);
        const ownerValue = userData.owner;
        state.data.owner = ownerValue;

        state.history = action.payload.waterRecords; 
      })
      .addCase(fetchWaterDataToday.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});

export default waterSlice.reducer;