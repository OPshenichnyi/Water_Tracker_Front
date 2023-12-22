export const handlerUpdateWaterRate = (state, { payload }) => {
  state.user.waterRate = payload;
};
