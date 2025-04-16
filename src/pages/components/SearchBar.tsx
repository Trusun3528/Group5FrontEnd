import { useState } from "react";

type SearchBarProps = {
  onSearch: (
    searchWord: string,
    searchMode: "title" | "category" | "price"
  ) => void;
  onClear: () => void;
  isLoading?: boolean;
};

function SearchBar({ onSearch, onClear, isLoading }: SearchBarProps) {
  const [searchMode, setSearchMode] = useState<"title" | "category" | "price">("title");
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    if (searchMode === "price") {
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);

      if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min > max) {
        return alert("Please enter a valid price range.");
      }

      onSearch(JSON.stringify({ minPrice: min, maxPrice: max }), "price");
    } else {
      if (!searchInput.trim()) return alert("Enter a search term.");
      onSearch(searchInput, searchMode);
    }
  };

  const handleClear = () => {
    setSearchInput("");
    setMinPrice("");
    setMaxPrice("");
    onClear();
  };

  return (
    <div className="flex gap-2 items-center mb-4 flex-wrap">
      <select
        className="border rounded px-2 py-1"
        value={searchMode}
        onChange={(e) => setSearchMode(e.target.value as "title" | "category" | "price")}
      >
        <option value="title">Search by Title</option>
        <option value="category">Search by Category</option>
        <option value="price">Search by Price</option>
      </select>

      {searchMode === "price" ? (
        <>
          <input
            className="border rounded px-2 py-1"
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className="border rounded px-2 py-1"
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </>
      ) : (
        <input
          className="border rounded px-2 py-1"
          type="text"
          placeholder={`Enter ${searchMode}...`}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      )}

      <button
  className="bg-black text-white rounded px-4 py-1 hover:bg-gray-900 active:scale-95 transition-transform cursor-pointer"
  onClick={handleSearch}
>
  Search
</button>
<button
  className="bg-yellow-500 text-white rounded px-4 py-1 hover:bg-yellow-600 active:scale-95 transition-transform cursor-pointer"
  onClick={handleClear}
>
  Clear

  {isLoading && (
    <div className="ml-2">
      <ClipLoader size={14} color="#ffffff" />
    </div>
  )}

</button>
    </div>
  );
}

export default SearchBar;