export const selectIsRegister = (state) => state.auth.isRegister;

export const selectIsLogined = (state) => state.auth.isLogined;

export const selectIsUser = (state) => state.auth.user;

export const selectRefresh = (state) => state.auth.isRefresh;

export const selectAvatarUrl = (state) => state.auth.user.avatarURL;

export const selectIsStatus = (state) => state.auth.addStatus;
