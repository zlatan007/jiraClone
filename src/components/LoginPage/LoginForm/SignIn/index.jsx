import { useFormik } from "formik";
import CustomTextField from "../../../Shared/CustomTextField";
import { Button } from "@mui/material";
import { initialValues, validationSchema } from "../../../../helpers/SignIn";

const SignIn = () => {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: (val) => {
      console.log("val", val);
    }
  });

  return (
    <div>
      <div className="mb-4">
        <CustomTextField
          name="emailId"
          label="Email Id"
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
          label="Email Id"
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
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default SignIn;