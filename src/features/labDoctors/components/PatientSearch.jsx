import React from "react";

export default function PatientSearch({
  searchQuery,
  setSearchQuery,
  onSearch,
  error,
}) {
  return (
    <form
      onSubmit={onSearch}
      className="w-full flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-3"
    >
      {/* INPUT */}
      <div className="flex-1 w-full min-w-0">
        <label className="text-xs sm:text-sm text-white/60 block mb-1 sm:mb-1.5">
          Search by National ID
        </label>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="e.g. 12345678901234"
          className="w-full rounded-lg sm:rounded-xl bg-[#11294B] border border-white/20 
                     p-2 sm:p-2.5 lg:p-3 text-xs sm:text-sm text-white placeholder-white/40 
                     focus:outline-none focus:ring-2 focus:ring-[#169CF6] focus:border-transparent transition-all"
        />
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto flex-shrink-0">
        <button
          className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg 
                     bg-[#169CF6] hover:bg-[#169CF6]/90 
                     text-white font-semibold text-xs sm:text-sm transition-colors"
        >
          Find Patient
        </button>

        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-white/20 text-white/80 hover:bg-white/5 text-xs sm:text-sm transition-colors"
        >
          Clear
        </button>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="text-xs sm:text-sm text-amber-300 mt-1 sm:mt-2 col-span-full">
          {error}
        </div>
      )}
    </form>
  );
}