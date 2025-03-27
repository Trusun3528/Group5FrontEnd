import { useEffect, useState } from "react";
import { AiOutlineClose as CloseIcon, AiOutlineMessage as ChatIcon } from "react-icons/ai";
import StoreItem from "./components/StoreItem";
import PageContainer from "./components/PageContainer";
import GeminiChat from "./components/GeminiChat";

function HomePage() {
  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/Product/GetProducts");
      const data = await response.json();
      setItems(data.$values);
    })();
  }, []);

  const isLoading = items == null;

  return (
    <>
      <PageContainer
        isLoading={isLoading}
        content={
          isLoading ? null : (
            <div className="flex flex-wrap gap-2">
              {items.map((item: any) => (
                <StoreItem key={item.id} item={item} />
              ))}
            </div>
          )
        }
      />
      <GeminiChat />
    </>
  );
}

export default HomePage;