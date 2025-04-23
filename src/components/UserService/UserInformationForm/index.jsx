import { useFormik } from "formik";

import { initialValues, validationSchema } from "../../../helpers/UserService/UserInformationForm";
import CustomTextField from "../../Shared/CustomTextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../../services/UserService";
import CustomLoader from "../../Shared/CustomLoader";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const UserInformationForm = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState();

    const id = useSelector((state) => state.authUserDetails.userDetails.id);

    const formik = useFormik({
        initialValues: initialValues(formData),
        validationSchema: validationSchema(),
        enableReinitialize: true,
        onSubmit: (val) => {
            setIsEdit(false);
        }
    });

    console.log("formik", formik.values)

    const { isLoading, data } = useQuery({
        queryKey: ["userDetails", id],
        queryFn: async () => {
            const res = await getUserDetails(id);
            //   console.log("🔥 API returned:", res);
            return res;
        },
        enabled: !!id,
        retry: false,
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        console.log("data", data)
        if (data?.success) {
            setFormData(data?.data);
        }
    }, [data]);

    if (isLoading) {
        return <CustomLoader open={true} />
    }

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

                {/* <div className="mb-4">
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
                </div> */}
            </div>

            <div className="flex space-x-4 justify-center my-4">
                <div className="w-32">
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

                {isEdit && <div className="w-32">
                    <Button
                        variant="contained"
                        className="rounded !w-full !py-2 !text-[16px] !font-medium"
                        onClick={() => {
                            setIsEdit(false);
                        }}
                    >
                        Cancel
                    </Button>
                </div>}
            </div>

        </div>

    )
}

export default UserInformationForm;