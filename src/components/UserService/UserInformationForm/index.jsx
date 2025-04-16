import { useFormik } from "formik";

import { initialValues, validationSchema } from "../../../helpers/UserService/UserInformationForm";
import CustomTextField from "../../Shared/CustomTextField";
import { Button } from "@mui/material";
import { useState } from "react";

const UserInformationForm = () => {

    const [isEdit, setIsEdit] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: (val) => {
            setIsEdit(false);
        }
    });

    return (
        <div className="mx-6">

            <div className="text-[32px] mb-8 text-center font-semibold">
                User Information
            </div>
            <div className="grid grid-cols-2 gap-4">
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
                        disabled={isEdit ? false : true}
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
                        disabled={isEdit ? false : true}
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
                        disabled={isEdit ? false : true}
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
                        disabled={isEdit ? false : true}
                        inputClassName="!p-0"
                        rootClassName="!p-0"
                    />
                </div>
            </div>

            <div className="w-32 mb-4 mt-8 mx-auto">
                <Button
                    variant="contained"
                    className="rounded !w-full !py-2 !text-[16px] !font-medium"
                    onClick={() => {
                        if (isEdit) {
                            formik.handleSubmit();
                        } else {
                            setIsEdit(true);
                        }
                    }}
                >
                    {isEdit ? "Save" : "Edit"}
                </Button>
            </div>
        </div>

    )
}

export default UserInformationForm;