import LoginForm from "../../components/LoginPage/LoginForm"
import Resources from "../../config/Resources"

const LoginPage = () => {
    return (
        <div className="grid grid-cols-2 h-screen">
            <div className="flex items-center justify-center">
                <img src={Resources.loginPageLogo} className="h-60 w-60 object-contain" />
            </div>
            <div className="flex items-center justify-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage