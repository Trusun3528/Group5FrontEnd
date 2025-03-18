import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInput, LoginSubmit, LoginError } from "./components/LoginComponents";
import PageContainer from "./components/PageContainer";

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const submitForm = async (formData: any) => {
    setIsLoading(true);

    const response = await fetch('/api/Account/CreateAccount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Username: formData.username,
        Email: formData.email,
        Password: formData.password
      })
    });

    if (response.status == 200) {
      localStorage.setItem('access-token', '');
      navigate('/');
    }
    else {
      setError('Failed to register.');
    }

    setIsLoading(false);
  }

  return (
    <PageContainer isLoading={isLoading} content={
      <form onSubmit={() => submitForm(formData)} className="flex flex-col gap-2">
        <LoginError>{error}</LoginError>
        <LoginInput formData={formData} setFormData={setFormData} name="username" type="text" text="Username" />
        <LoginInput formData={formData} setFormData={setFormData} name="email" type="email" text="Email" />
        <LoginInput formData={formData} setFormData={setFormData} name="password" type="password" text="Password" />
        <LoginSubmit>Register</LoginSubmit>
      </form>
    }>
    </PageContainer>
  )
}

export default RegisterPage;