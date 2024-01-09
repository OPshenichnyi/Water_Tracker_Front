import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterVolume,
  deleteWaterVolume,
  updateWaterVolume,
  fetchWaterDataToday,
  waterMonts,
} from './operations';

import { getUserId } from '../water/operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    percentage: 0,
    deleting: false,
    updating: false,
    data: {
      waterVolume: 0,
      date: new Date().toISOString(),
      owner: null,
    },
    history: [],
    mounthHistory: [],
    loading: false,
    error: null,
    statusOperation: null,
  },
  reducers: {
    resetStatusOperation(state) {
      state.addStatus = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addWaterVolume.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWaterVolume.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.statusOperation = 'succses-add';
      })
      .addCase(addWaterVolume.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateWaterVolume.pending, state => {
        state.updating = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWaterVolume.fulfilled, (state, action) => {
        state.updating = false;
        state.loading = false;
        state.data = action.payload;
        state.statusOperation = 'succses-edit';
      })
      .addCase(updateWaterVolume.rejected, (state, action) => {
        state.updating = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteWaterVolume.pending, state => {
        state.deleting = true;
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWaterVolume.fulfilled, (state, action) => {
        state.loading = false;
        state.deleting = false;
        state.data = action.payload;
        state.history = action.payload.waterRecords || [];
        state.percentage = action.payload.percentage || 0;
        state.statusOperation = 'succses-delete';
      })
      .addCase(deleteWaterVolume.rejected, (state, action) => {
        state.deleting = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchWaterDataToday.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWaterDataToday.fulfilled, (state, action) => {
        state.loading = false;

        if (
          action.payload.waterRecords &&
          action.payload.waterRecords.length > 0
        ) {
          const userData = getUserId(action.payload.waterRecords[0].owner);
          const ownerValue = userData.owner;
          state.data.owner = ownerValue;

          state.history = action.payload.waterRecords;
          state.percentage = action.payload.percentage;
        }
      })
      .addCase(fetchWaterDataToday.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(waterMonts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(waterMonts.fulfilled, (state, action) => {
        state.loading = false;
        state.mounthHistory = action.payload;
      })
      .addCase(waterMonts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetStatusOperation } = waterSlice.actions;
export default waterSlice.reducer;
