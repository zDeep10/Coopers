import * as yup from "yup";

const userSchema = yup.object().shape({
  password: yup
    .string()
    .min(4, "The password cannot be less than 4 characters")
    .max(20)
    .required("The password fild cannot be empty"),
  user: yup
    .string()
    .min(4, "The user name cannot be less than 4 characters")
    .required("The user name cannot be empty"),
});

export default userSchema;
