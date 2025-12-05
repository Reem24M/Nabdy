import React from "react";
import { Search, AlertCircle } from "lucide-react";

const SearchForm = ({
  searchQuery,
  searchError,
  onSearchChange,
  onSearchSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(e);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div>
        <label className="text-white text-sm mb-1.5 block">
          Search by National ID
        </label>
        <div className="flex gap-2 items-center min-w-0">
          <input
            type="text"
            autoFocus
            className="flex-1 min-w-0 p-3 rounded-lg text-white placeholder-white/40 text-sm transition-all duration-300 bg-white/5 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400 focus:ring-opacity-20"
            placeholder="Enter national ID (e.g., 12345678901234)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-[#169CF6] text-white"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {searchError && (
        <div className="p-3 rounded-lg flex items-center gap-2 bg-amber-800/10">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span className="text-white/80 text-sm">{searchError}</span>
        </div>
      )}
    </form>
  );
};

export default SearchForm;