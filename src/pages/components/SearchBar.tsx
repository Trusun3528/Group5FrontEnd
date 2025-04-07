import { useState } from "react";

type SearchBarProps = {
  onSearch: (searchWord: string, searchMode: "title" | "category") => void;
  onClear: () => void;
};

function SearchBar({ onSearch, onClear }: SearchBarProps) {
  const [searchMode, setSearchMode] = useState<"title" | "category">("title");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (!searchInput.trim()) return alert("Enter a search term.");

    onSearch(searchInput, searchMode);
  };

  // handles the clearing of the input and resetting the products
  const handleClear = () => {
    setSearchInput(""); 
    onClear(); 
  };

  return (
    <div className="flex gap-2 items-center mb-4">
      <select
        className="border rounded px-2 py-1"
        value={searchMode}
        onChange={(e) => setSearchMode(e.target.value as "title" | "category")}
      >
        <option value="title">Search by Title</option>
        <option value="category">Search by Category</option>
      </select>
      <input
        className="border rounded px-2 py-1"
        type="text"
        placeholder={`Enter ${searchMode}...`}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className="bg-black text-white rounded px-4 py-1"
        onClick={handleSearch}
      >
        Search
      </button>
      <button
        className="bg-yellow-500 text-white rounded px-4 py-1"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBar;