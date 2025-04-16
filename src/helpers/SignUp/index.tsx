import * as yup from "yup";

export const initialValues = () => {
    return {
        firstName: "",
        lastName: "",
        emailId: "",
        password: ""
    }
}

export const validationSchema = () => {
    return yup.object().shape({
      firstName: yup
        .string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),
      lastName: yup
        .string()
        .min(2, "Last name must be at least 2 characters"),
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