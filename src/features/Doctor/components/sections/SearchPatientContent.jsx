import React from "react";
import { Search, AlertCircle } from "lucide-react";
import PatientSummaryCard from "../../../Doctor/components/PatientSummaryCard";
import SearchForm from "../SearchForm";

const SearchPatientContent = ({
  selectedPatient,
  searchQuery,
  searchError,
  patientTabs,
  activeTab,
  onSearchChange,
  onSearchSubmit,
  onTabChange,
}) => {
  return (
    <div className="space-y-4">

      {/* Search Box */}
      <div
        className="p-4 sm:p-5 !rounded-lg"
        style={{ backgroundColor: "#11294B", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Search className="w-5 h-5" style={{ color: "#169CF6" }} />
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
        <div
          className="p-6 sm:p-8 !rounded-xl text-center"
          style={{ backgroundColor: "#11294B", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <Search className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3" style={{ color: "#6B7280" }} />
          <h5 className="text-white font-medium mb-2 text-sm sm:text-base">
            Search for a patient
          </h5>
          <p className="text-white/60 text-xs sm:text-sm">
            Enter a national ID above to load patient records, medical history, and notes.
          </p>
        </div>
      ) : (
        <>
          {/* Patient Summary */}
          <PatientSummaryCard patient={selectedPatient} />

          {/* Patient Tabs */}
          {selectedPatient && patientTabs.length > 0 && (
            <div
              className="p-4 sm:p-5 !rounded-lg"
              style={{ backgroundColor: "#11294B", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* RESPONSIVE TAB NAVIGATION */}
              <div className="mb-4 border-b border-white/10 pb-4 overflow-x-auto flex gap-2 no-scrollbar">
                {patientTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => onTabChange(index)}
                    className={`whitespace-nowrap px-3 sm:px-4 py-2 !rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 ${
                      activeTab === index
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                    style={{
                      backgroundColor: activeTab === index ? "#169CF6" : "transparent",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div>{patientTabs[activeTab]?.content}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPatientContent;
