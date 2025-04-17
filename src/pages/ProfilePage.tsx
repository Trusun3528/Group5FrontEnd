import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import { getAuthHeaders, isLoggedIn } from "../auth";

function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/UserCart/GetCurrentUser`, {
          method: "GET",
          headers: getAuthHeaders()
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();

        setUser(data);
      } catch (err) {
        console.error("Error loading user:", err);
      }
    })();
  }, []);

  const isLoading = user == null;

  return (
    <PageContainer
      isLoading={isLoading}
      content={
        isLoading ? null : (
          <>
            <h1 className="text-xl font-bold mb-4">Welcome, {user.userName}!</h1>
            <ul className="space-y-2">
              <li>
                <Link to="/wishlist" className="text-blue-600 underline">
                  View Wishlist
                </Link>
              </li>
            </ul>
          </>
        )
      }
    />
  );
}

export default ProfilePage;