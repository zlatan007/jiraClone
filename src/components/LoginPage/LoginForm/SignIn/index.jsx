import { useFormik } from "formik";
import CustomTextField from "../../../Shared/CustomTextField";
import { Button } from "@mui/material";
import { initialValues, validationSchema } from "../../../../helpers/SignIn";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../../../services/LoginService";
import CustomLoader from "../../../Shared/CustomLoader";
import { useDispatch } from "react-redux";
import { checkIsAuthenticated, saveUserDetails } from "../../../../redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: (val) => {
      mutate({
        email: val?.emailId,
        password: val?.password,
      })
    }
  });

  const {
    mutate,
    isLoading,
  } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      console.log("28", data);
      if (data?.success) {
        const {token, ...details} = data?.userDetails;
        localStorage.setItem("token", data?.userDetails?.token);
        localStorage.setItem("userDetails", JSON.stringify(details));
        dispatch(saveUserDetails(JSON.parse(localStorage.getItem("userDetails"))));
        dispatch(checkIsAuthenticated(true));
        navigate("/tasklist");
      }
    },
    onError: (err) => {
      console.error('Signup failed:', err);
    },
  });

  return (
    <div>
      <CustomLoader open={isLoading} />
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
          className="rounded !w-full !py-2 !text-[16px] !text-white !font-medium !bg-blue-600"
          onClick={formik.handleSubmit}
        >
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default SignIn;