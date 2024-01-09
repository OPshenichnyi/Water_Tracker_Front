// ============================ Selector Registr ==============================
export const selectIsRegister = (state) => state.auth.isRegister;
// ============================ Selector Is Login =============================
export const selectIsLogined = (state) => state.auth.isLogined;
// ============================ Selector User =================================
export const selectIsUser = (state) => state.auth.user;
// ============================ Selector Refresh ==============================
export const selectRefresh = (state) => state.auth.isRefresh;
// =========================== Selector User Avatar ===========================
export const selectAvatarUrl = (state) => state.auth.user.avatarURL;
// =======================Selector Status Operation ===========================
export const selectIsStatus = (state) => state.auth.addStatus;
// ===================== Selector Loader user info ============================
export const selectIsPending = (state) => state.auth.isPending;
