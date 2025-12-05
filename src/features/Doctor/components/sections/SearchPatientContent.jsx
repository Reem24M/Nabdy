import React from "react";
import { Search, AlertCircle } from "lucide-react";
import PatientSummaryCard from "../../../Doctor/components/PatientSummaryCard";
import SearchForm from "../SearchForm";

const SearchPatientContent = ({
  selectedPatient,
  searchQuery,
  searchError,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <div className="space-y-4">
      {/* Search Box */}
      <div className="p-4 sm:p-5 rounded-lg bg-[#11294B]">
        <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-sky-400" aria-hidden />
          Search Patient
        </h3>

        <SearchForm
          searchQuery={searchQuery}
          searchError={searchError}
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
        />
      </div>

      {/* No Patient Selected */}
      {!selectedPatient ? (
        <div className="p-6 sm:p-8 rounded-xl text-center bg-[#11294B]">
          <Search
            className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 text-gray-400"
            aria-hidden
          />
          <h5 className="text-white font-medium mb-2 text-sm sm:text-base">
            Search for a patient
          </h5>
          <p className="text-white/60 text-xs sm:text-sm">
            Enter a national ID above to load patient records, medical history,
            and notes.
          </p>
        </div>
      ) : (
        <>
          {/* Patient Summary */}
          <PatientSummaryCard patient={selectedPatient} />

          {/* Patient details (tabs are rendered by the page-level Tabs component)
              Keep only the summary here to avoid duplicate tab navigation/content. */}
        </>
      )}
    </div>
  );
};

export default SearchPatientContent;