import { useState, useEffect } from "react";
import { LoginInput } from "./components/LoginComponents";
import PageContainer from "./components/PageContainer";
import Header from "./components/Header";
import { fetchUserPreferences } from "../services/userService";

function UserPreferencesPage() {
  const [formData, setFormData] = useState({userName: "", email: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
      async function getUserData() {
          const data = await fetchUserPreferences();
          if (data) setFormData(data);
          setIsLoading(false);
      }

    getUserData();
  }, []);

  return (
    <>
      <Header />
      <PageContainer isLoading={isLoading} content={
          <form className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">User Preferences</h1>
            <LoginInput formData={formData} setFormData={setFormData} name="userName" type="text" text="Username" disabled />
            <LoginInput formData={formData} setFormData={setFormData} name="email" type="email" text="Email" disabled />
          </form>
        }
      />
    </>
  );
}

export default UserPreferencesPage;