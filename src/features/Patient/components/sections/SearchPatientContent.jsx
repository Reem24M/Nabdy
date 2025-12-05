import React from "react";
import { Search } from "lucide-react";
import PatientSummaryCard from "../PatientSummary";
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
    <div className="space-y-3 sm:space-y-4">
      {/* Search Box */}
      <div
        className="p-2 sm:p-3 lg:p-5 !rounded-lg"
        style={{
          backgroundColor: "#11294B",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
          <Search
            className="w-4 sm:w-5 h-4 sm:h-5"
            style={{ color: "#169CF6" }}
          />
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
          style={{
            backgroundColor: "#11294B",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Search
            className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2 sm:mb-3"
            style={{ color: "#6B7280" }}
          />
          <h5 className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">
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

          {/* Patient Tabs */}
          {selectedPatient && patientTabs.length > 0 && (
            <div
              className="p-2 sm:p-3 lg:p-5 !rounded-lg"
              style={{
                backgroundColor: "#11294B",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex flex-wrap gap-1 sm:gap-2 border-b border-white/10 pb-2 sm:pb-3 overflow-x-auto">
                  {patientTabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => onTabChange(index)}
                      className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 !rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                        activeTab === index
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                      style={{
                        backgroundColor:
                          activeTab === index ? "#169CF6" : "transparent",
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Action Buttons: موجودة في كل التابس ماعدا Notes */}
                {patientTabs[activeTab]?.label !== "Clinical Notes" && (
                  <div className="flex gap-2 sm:gap-3 pt-1">
                    <button
                      className="px-4 sm:px-5 py-2 sm:py-2.5 !rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 border border-white/10"
                      style={{
                        backgroundColor: "rgba(16, 185, 129, 0.15)",
                        color: "#10B981",
                        borderColor: "#10B981",
                      }}
                    >
                      <span className="text-sm sm:text-base">+</span>
                      <span>Add</span>
                    </button>
                    <button
                      className="px-4 sm:px-5 py-2 sm:py-2.5 !rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 border border-white/10"
                      style={{
                        backgroundColor: "rgba(59, 130, 246, 0.15)",
                        color: "#3B82F6",
                        borderColor: "#3B82F6",
                      }}
                    >
                      <span className="text-sm sm:text-base">✎</span>
                      <span>Edit</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="overflow-x-auto">
                {patientTabs[activeTab]?.content}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPatientContent;