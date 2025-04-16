import { useFormik } from "formik";
import CustomTextField from "../../../Shared/CustomTextField";
import { initialValues, validationSchema } from "../../../../helpers/SignUp";
import { Button } from "@mui/material";
import { signUp } from "../../../../services/LoginService";
import { useMutation } from "@tanstack/react-query";

const SignUp = () => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (val) => {
            mutate({
                email: val?.emailId,
                password: val?.password,
                firstname: val?.firstName,
                lastname: val?.lastName
            })
        }
    });

    
        const {
            mutate,
            isLoading,
        } = useMutation({
            mutationFn: signUp,
            onSuccess: (data) => {
                console.log('✅ Signup success:', data);
            },
            onError: (err) => {
                console.error('Signup failed:', err);
            },
        });

    return (
        <div>
            <div className="mb-4">
                <CustomTextField
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={formik.values.firstName}
                    touched={formik.touched.firstName}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName ? formik.errors.firstName : ""}
                    placeholder="Enter Your First Name"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    required={true}
                    disabled={false}
                    inputClassName="!p-0"
                    rootClassName="!p-0"
                />
            </div>

            <div className="mb-4">
                <CustomTextField
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={formik.values.lastName}
                    touched={formik.touched.lastName}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName ? formik.errors.lastName : ""}
                    placeholder="Enter Your Last Name"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    required={true}
                    disabled={false}
                    inputClassName="!p-0"
                    rootClassName="!p-0"
                />
            </div>

            <div className="mb-4">
                <CustomTextField
                    name="emailId"
                    label="Email ID"
                    type="text"
                    value={formik.values.emailId}
                    touched={formik.touched.emailId}
                    error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                    helperText={formik.touched.emailId ? formik.errors.emailId : ""}
                    placeholder="Enter Your Email"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    required={true}
                    disabled={false}
                    inputClassName="!p-0"
                    rootClassName="!p-0"
                />
            </div>

            <div className="mb-4">
                <CustomTextField
                    name="password"
                    label="Password"
                    type="text"
                    value={formik.values.password}
                    touched={formik.touched.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password ? formik.errors.password : ""}
                    placeholder="Enter Your Password"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    required={true}
                    disabled={false}
                    inputClassName="!p-0"
                    rootClassName="!p-0"
                />
            </div>

            <div className="w-full mb-4">
                <Button
                    variant="contained"
                    className="rounded !w-full !py-2 !text-[16px] !font-medium"
                    onClick={formik.handleSubmit}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    )
}

export default SignUp;