import * as Yup from "yup";

const changePassword = Yup.object().shape({
  email: Yup.string().email(),
  oldPassword: Yup.string()
    .min(8, "Password must be min 8 characters")
    .max(64, "Password must be max 64 characters"),
  newPassword: Yup.string()
    .min(8, "Password must be min 8 characters")
    .max(64, "Password must be max 64 characters")
    .notOneOf(
      [Yup.ref("oldPassword")],
      "New password must be different from the old password"
    ),
  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref("newPassword")],
    "Passwords must match"
  ),
});

export default changePassword;
