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
    <form className="space-y-2 sm:space-y-3" onSubmit={handleSubmit}>
      <div>
        <label className="text-white text-xs sm:text-sm mb-1 sm:mb-1.5 block">
          Search by National ID
        </label>
        <div className="flex gap-1.5 sm:gap-2">
          <input
            type="text"
            autoFocus
            className="flex-1 p-2 sm:p-3 !rounded-lg text-white placeholder-white/40 text-xs sm:text-sm transition-all duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              outline: "none",
            }}
            placeholder="Enter national ID (e.g., 12345678901234)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button
            type="submit"
            className="px-2 sm:px-4 py-2 sm:py-3 !rounded-lg font-medium transition-all duration-300 hover:scale-105 flex-shrink-0"
            style={{ backgroundColor: "#169CF6", color: "white" }}
          >
            <Search className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>
      </div>

      {searchError && (
        <div
          className="p-2 sm:p-3 !rounded-lg flex items-center gap-2"
          style={{
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
          }}
        >
          <AlertCircle
            className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0"
            style={{ color: "#F59E0B" }}
          />
          <span className="text-white/80 text-xs sm:text-sm">
            {searchError}
          </span>
        </div>
      )}
    </form>
  );
};

export default SearchForm;