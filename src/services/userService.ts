// CHANGE WHEN USER PREFERENCES IN B-E IS UPDATED
export async function fetchUserPreferences(): Promise<{ userName: string; email: string } | null> {
  const token = localStorage.getItem("access-token");
  if (!token) return null;

  try { // CHANGE CONNECTION STRING LATER (the port number is correct)***********************************
    const response = await fetch("http://localhost:5251/api/User/GetUserPreferences", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch user preferences:", error);
    return null;
  }
}