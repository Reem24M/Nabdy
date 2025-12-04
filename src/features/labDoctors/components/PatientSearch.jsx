import React from "react";

export default function PatientSearch({ searchQuery, setSearchQuery, onSearch, error }) {
  return (
    <form
      onSubmit={onSearch}
      className="w-full flex flex-col sm:flex-row sm:items-end gap-4"
    >
      {/* INPUT */}
      <div className="flex-1 w-full">
        <label className="text-sm text-slate-400 block mb-1">
          Search by National ID
        </label>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="e.g. 12345678901234"
          className="w-full rounded-xl bg-[#021619] border border-slate-700 
                     p-3 text-slate-100 placeholder-slate-500 
                     focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button
          className="w-full sm:w-auto p-3 !rounded-lg 
                     bg-gradient-to-r from-sky-400 to-sky-600 
                     text-black font-semibold"
        >
          Find Patient
        </button>

        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="w-full sm:w-auto p-3 !rounded-lg border border-slate-700 text-slate-300"
        >
          Clear
        </button>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div className="text-sm text-amber-300 mt-1 sm:mt-2 sm:ml-2">
          {error}
        </div>
      )}
    </form>
  );
}
