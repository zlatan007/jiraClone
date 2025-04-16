import { Button } from "@mui/material"
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginForm = () => {
    const [logInText, setLoginText] = useState(true);
    return (
        <div className="border shadow-md px-6 py-6 flex flex-col rounded-md w-1/2 mx-auto">
            <div className="text-black text-[24px] font-bold text-center mb-6">
                {logInText ? "Log in into this account" : "Sign up for new account"}
            </div>
            <div>
                
                {logInText ? <SignIn /> : <SignUp setLoginText={setLoginText} />}
                <div className="my-4">
                    {logInText ? <div onClick={() => {
                        setLoginText(false)
                    }}>
                        Dont have account? <span className=" text-blue-600 cursor-pointer">
                            SignUp
                        </span>
                    </div> :  <div>
                        Already have account - <span className=" text-blue-600 cursor-pointer" onClick={() => {
                            setLoginText(true)
                        }}>
                            Login
                        </span>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default LoginForm