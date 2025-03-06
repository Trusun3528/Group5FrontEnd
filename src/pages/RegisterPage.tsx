import Header from "./components/Header";
import LoginInput from "./components/LoginInput";
import LoginSubmit from "./components/LoginSubmit";

function RegisterPage() {
  return (
    <div>
        <Header />

        <form className="flex flex-col h-screen justify-center items-center">
            <div className="flex flex-col gap-2">
              <LoginInput text="Email" />
              <LoginInput text="Username" />
              <LoginInput text="Password" />
              <LoginInput text="Confirm password" />
            </div>
            <LoginSubmit>Register</LoginSubmit>
        </form>
        
    </div>
  )
}

export default RegisterPage;