import * as yup from "yup";

export const initialValues = () => {
    return {
        emailId: "",
        password: ""
    }
}

export const validationSchema = () => {
    return yup.object().shape({
      emailId: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    });
}