import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInput, LoginSubmit, LoginError } from "./components/LoginComponents";
import PageContainer from "./components/PageContainer";
import { logIn } from "../auth";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const submitForm = async (formData: any) => {
    setIsLoading(true);

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });

    if (response.status == 200) {
      logIn((await response.json()).token);
      navigate('/');
    }
    else {
      setError('Failed to log in.');
    }

    setIsLoading(false);
  }

  return (
    <PageContainer isLoading={isLoading} content={
      <form onSubmit={() => submitForm(formData)} className="flex flex-col gap-2">
        <LoginError>{error}</LoginError>
        <LoginInput formData={formData} setFormData={setFormData} name="email" type="email" text="Email" />
        <LoginInput formData={formData} setFormData={setFormData} name="password" type="password" text="Password" />
        <LoginSubmit>Log in</LoginSubmit>
      </form>
    }>
    </PageContainer>
  )
}

export default LoginPage;