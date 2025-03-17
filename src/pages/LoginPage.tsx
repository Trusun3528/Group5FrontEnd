import Header from "./components/Header";
import LoginInput from "./components/LoginInput";
import LoginSubmit from "./components/LoginSubmit";

function LoginPage() {
  return (
    <div>
        <Header />
        <form className="flex flex-col h-screen justify-center items-center">
            <div className="flex flex-col gap-2">
              <LoginInput text="Username" />
              <LoginInput text="Password" />
            </div>
            <LoginSubmit>Login</LoginSubmit>
        </form>
        
    </div>
  )
}

export default LoginPage;