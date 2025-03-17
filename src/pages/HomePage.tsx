import { useEffect, useState } from "react";
import StoreItem from "./components/StoreItem";
import PageContainer from "./components/PageContainer";

function HomePage() {
  const [items, setItems] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/Product/GetProducts")
      setItems((await response.json()).$values)
    })()
  }, [])

  const isLoading = items == null

  return (
    <PageContainer
      isLoading={isLoading}
      content={isLoading ? null :
      <div className="flex gap-2">
        {items.map((item: any) => <StoreItem key={item.id} item={item}></StoreItem>)}
      </div>}>
    </PageContainer>
  )
}

export default HomePage;