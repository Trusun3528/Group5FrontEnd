import { useState } from "react";
import { LoginInput, LoginSubmit } from "./components/LoginComponents";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";

function UserPreferencesPage() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  return (
    <>
      <Header />
      <PageContainer isLoading={false} content={
          <form onSubmit={submitForm} className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">User Preferences</h1>
            <LoginInput formData={formData} setFormData={setFormData} name="userName" type="text" text="Username" />
            <LoginInput formData={formData} setFormData={setFormData} name="email" type="email" text="Email" />
            <LoginInput formData={formData} setFormData={setFormData} name="password" type="password" text="New Password (optional)" />
            <LoginSubmit>Save Preferences</LoginSubmit>
          </form>
        }
      />
    </>
  );
}

export default UserPreferencesPage;