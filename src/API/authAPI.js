import axios from 'axios';

export const base = axios.create({
  baseURL: 'https://db-water-tracker.onrender.com/api',
});

export const updateWaterRate = async newWaterRate => {
  const { data } = await base.patch('/water-rate', {
    waterRate: newWaterRate,
  });
  return data;
};
