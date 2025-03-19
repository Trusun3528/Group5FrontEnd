import { useEffect, useState } from "react";
import PageContainer from "./components/PageContainer";

function ProfilePage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
    (async () => {
        const response = await fetch(`/api/Account/GetUser/1`, {
            method: 'GET',
            headers: 
        })
        console.log(response)
    })()
    }, [])

    const isLoading = user == null
  
    return (
      <PageContainer
        isLoading={isLoading}
        content={isLoading ? null : <>
        {user.Username}
        </>}>
      </PageContainer>
    )
}

export default ProfilePage;