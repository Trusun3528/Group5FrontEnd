import { useEffect, useState } from "react";
import { AiOutlineClose as CloseIcon, AiOutlineMessage as ChatIcon } from "react-icons/ai";
import StoreItem from "./components/StoreItem";
import PageContainer from "./components/PageContainer";
import GeminiChat from "./components/GeminiChat";
import SearchBar from "./components/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";

function HomePage() {
    const [items, setItems] = useState<any[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/Product/GetProducts");
      const data = await response.json();
      setItems(data.$values || []);
      })();

      // Check login status
      const user = sessionStorage.getItem("employee");
      setIsLoggedIn(!!user);
  }, []);

  const isLoading = items.length === 0;
    // toggle between title and category searches
  const handleSearch = async (searchWord: string, searchMode: "title" | "category") => {
    const endpoint =
      searchMode === "title"
        ? `/api/Product/SearchProducts?searchWord=${encodeURIComponent(searchWord)}`
        : `/api/Product/SearchProductsByCategory?categoryName=${encodeURIComponent(searchWord)}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(await response.text());

      const data = await response.json();
      setItems(data.$values || []);
    } catch (error) {
      console.error("Search error:", error);
      alert("No results found or invalid response.");
    }
  };

  // handles clearing the search feature if the clear button is clicked
  const handleClear = async () => {
    try {
      const response = await fetch("/api/Product/GetProducts");
      const data = await response.json();
      setItems(data.$values || []);
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  // handles clearing the search feature if the logo is clicked
  // needs to be seperate from handleClear due to Header
  const handleLogoClick = async () => {
    try {
      const response = await fetch("/api/Product/GetProducts");
      const data = await response.json();
      setItems(data.$values || []);
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  return (
    <>
      <PageContainer
        isLoading={isLoading}
        onLogoClick={handleLogoClick}

        content={
          isLoading ? (
            <ClipLoader />
          ) : (
            <>
               <SearchBar onSearch={handleSearch} onClear={handleClear} />
               {!isLoggedIn && (
                  <div className="bg-yellow-100 border border-yellow-200 p-4 rounded-xl mb-4">
                     <p className="text-yellow-700">
                         You are browsing as a guest.{" "}
                        <a href="/login" className="underline text-blue-600">Login</a> or{" "}
                        <a href="/register" className="underline text-blue-600">Register</a> to unlock more features like discounts at checkout.
                     </p>
                  </div>
               )}
              <div className="flex flex-wrap gap-2">
                {items.map((item: any) => (
                  <StoreItem key={item.id} item={item} />
                ))}
              </div>
            </>
          )
        }
      />
      <GeminiChat />
    </>
  );
}

export default HomePage;