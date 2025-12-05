// components/LabResultsSection.jsx
import {
  PlusCircle,
  Calendar,
  AlertCircle,
  ChevronRight,
  FileText,
} from "lucide-react";

export default function LabResultsSection({ labResults, onOpenModal }) {
  const getStatusCount = (status) => {
    return labResults.reduce((count, test) => {
      return count + test.results.filter((res) => res.status === status).length;
    }, 0);
  };

  return (
    <div
      className="rounded-2xl mt-6 text-white"
      style={{ backgroundColor: "#0F234A" }}
    >
      <div
        className="p-3 sm:p-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="p-2 rounded-xl flex-shrink-0"
              style={{ backgroundColor: "rgba(22, 156, 246, 0.2)" }}
            >
              <FileText
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: "#169CF6" }}
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-lg font-bold text-white truncate">
                Lab Results
              </h2>
              <p className="text-white/60 text-xs mt-0.5 truncate">
                {labResults.length} tests,{" "}
                {labResults.reduce((sum, test) => sum + test.results.length, 0)}{" "}
                results
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={onOpenModal}
              className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
              style={{
                backgroundColor: "#169CF6",
                color: "white",
              }}
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Add New</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        </div>

        {/* Stats Bar */}
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 sm:mb-5">
  {/* Normal */}
  <div className="bg-[#0F234A] border-l-4 border-l-emerald-500 border border-white/10 p-3 !rounded-lg">
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <p className="text-white/60 text-xs truncate">Normal</p>
        <p className="text-base sm:text-lg font-bold text-white">
          {getStatusCount("normal")}
        </p>
      </div>
      <div className="w-6 h-6 !rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 !rounded-full bg-emerald-400" />
      </div>
    </div>
  </div>

  {/* Warning */}
  <div className="bg-[#0F234A] border-l-4 border-l-amber-500 border border-white/10 p-3 !rounded-lg">
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <p className="text-white/60 text-xs truncate">Warning</p>
        <p className="text-base sm:text-lg font-bold text-white">
          {getStatusCount("warning")}
        </p>
      </div>
      <div className="w-6 h-6 !rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 !rounded-full bg-amber-400" />
      </div>
    </div>
  </div>

  {/* Critical */}
  <div className="bg-[#0F234A] border-l-4 border-l-red-500 border border-white/10 p-3 !rounded-lg">
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <p className="text-white/60 text-xs truncate">Critical</p>
        <p className="text-base sm:text-lg font-bold text-white">
          {getStatusCount("danger")}
        </p>
      </div>
      <div className="w-6 h-6 !rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 !rounded-full bg-red-400" />
      </div>
    </div>
  </div>

  {/* Total Tests */}
  <div className="bg-[#0F234A] border-l-4 border-l-[#169CF6] border border-white/10 p-3 !rounded-lg">
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <p className="text-white/60 text-xs truncate">Total Tests</p>
        <p className="text-base sm:text-lg font-bold text-white">
          {labResults.length}
        </p>
      </div>
      <div className="w-6 h-6 !rounded-full bg-[#169CF6]/20 flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 !rounded-full bg-[#169CF6]" />
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Results List */}
      <div className="p-2 sm:p-4">
        {labResults.length === 0 ? (
          <div className="text-center py-8">
            <div
              className="inline-flex p-3 rounded-xl mb-3"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <AlertCircle className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
              No Lab Results Yet
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mb-4">
              Start by adding your first lab result
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
              style={{
                backgroundColor: "#169CF6",
                color: "white",
              }}
            >
              <PlusCircle className="w-4 h-4" />
              Add First Result
            </button>
          </div>
        ) : (
          labResults.map((test) => {
            const criticalCount = test.results.filter(
              (r) => r.status === "danger"
            ).length;
            const warningCount = test.results.filter(
              (r) => r.status === "warning"
            ).length;

            return (
              <div
                key={test.id}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.005] group mb-4" // <-- مسافة بين كل تحليل
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Test Header */}
                <div
                  className="p-2 sm:p-4"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                    <div className="flex items-start gap-2 sm:gap-3 min-w-0">
                      <div className="flex-shrink-0 mt-0.5">
                        <div
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(22, 156, 246, 0.2)",
                          }}
                        >
                          <FileText
                            className="w-4 h-4"
                            style={{ color: "#169CF6" }}
                          />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-[#169CF6] transition-colors duration-300 truncate">
                          {test.testName}
                        </h3>
                        <div className="flex flex-wrap gap-1 sm:gap-2 text-white/60 text-xs">
                          <div className="flex items-center gap-1 truncate">
                            <Calendar className="w-3 h-3 flex-shrink-0" />
                            {new Date(test.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {test.results.length} tests
                          </div>
                          {criticalCount > 0 && (
                            <div className="flex items-center gap-1 text-red-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                              {criticalCount}
                            </div>
                          )}
                          {warningCount > 0 && (
                            <div className="flex items-center gap-1 text-yellow-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                              {warningCount}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#169CF6] transition-colors duration-300 flex-shrink-0" />
                  </div>
                </div>

                {/* Results Table */}
                <div className="hidden sm:block p-3 overflow-x-auto">
                  <table className="w-full min-w-[600px] table-fixed">
                    <thead>
                      <tr className="text-left text-white/60 text-xs border-b border-white/10">
                        <th className="pb-2 font-medium">Sub-test</th>
                        <th className="pb-2 font-medium">Value</th>
                        <th className="pb-2 font-medium">Normal Range</th>
                        <th className="pb-2 font-medium text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {test.results.map((res, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200 last:border-0"
                        >
                          <td className="py-2">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  res.status === "normal"
                                    ? "bg-green-500"
                                    : res.status === "warning"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                                }`}
                              />
                              <span className="text-white text-sm font-medium">
                                {res.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <span className="text-white text-sm font-semibold">
                              {res.value}
                            </span>
                            {res.unit && (
                              <span className="text-white/60 text-xs ml-1">
                                {res.unit}
                              </span>
                            )}
                          </td>
                          <td className="py-2">
                            <span className="text-white/80 text-sm">
                              {res.normal}
                            </span>
                          </td>
                          <td className="py-2">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                                res.status === "normal"
                                  ? "text-green-400 bg-green-400/10"
                                  : res.status === "warning"
                                  ? "text-yellow-400 bg-yellow-400/10"
                                  : "text-red-400 bg-red-400/10"
                              }`}
                            >
                              {res.status === "normal"
                                ? "✓ Normal"
                                : res.status === "warning"
                                ? "⚠ Warning"
                                : "✗ Critical"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="sm:hidden p-3 space-y-2">
                  {test.results.map((res, index) => (
                    <div
                      key={index}
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-white truncate flex-1">
                          {res.name}
                        </span>
                        <span
                          className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-medium flex-shrink-0 ${
                            res.status === "normal"
                              ? "text-green-400 bg-green-400/10"
                              : res.status === "warning"
                              ? "text-yellow-400 bg-yellow-400/10"
                              : "text-red-400 bg-red-400/10"
                          }`}
                        >
                          {res.status === "normal"
                            ? "✓"
                            : res.status === "warning"
                            ? "⚠"
                            : "✗"}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-white/60">Result</p>
                          <p className="text-white font-semibold">
                            {res.value}
                            {res.unit ? ` ${res.unit}` : ""}
                          </p>
                        </div>
                        <div>
                          <p className="text-white/60">Normal Range</p>
                          <p className="text-white/80 text-xs">{res.normal}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}