import React from "react";
import StatusBadge from "./StatusBadge";

const LabResultsContent = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="space-y-4">
      {patient.labResults.map((result) => (
        <div key={result.id} className="p-5 !rounded-lg" style={{ backgroundColor: '#11294B', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">{result.testName}</h3>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">
                {new Date(result.date).toLocaleDateString()}
              </span>
              <StatusBadge status={result.status} />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-white/60 text-xs border-b border-white/10">
                  <th className="pb-2 font-medium">Test</th>
                  <th className="pb-2 font-medium">Result</th>
                  <th className="pb-2 font-medium">Normal Range</th>
                  <th className="pb-2 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {result.results.map((test, index) => (
                  <tr key={index} className="border-b border-white/5 last:border-0">
                    <td className="py-3">
                      <span className="text-white text-sm">{test.name}</span>
                    </td>
                    <td className="py-3">
                      <span className="text-white font-semibold">{test.value}</span>
                    </td>
                    <td className="py-3">
                      <span className="text-white/80 text-sm">{test.normal}</span>
                    </td>
                    <td className="py-3 text-left">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${test.status === "normal"
                          ? "text-green-400 bg-green-400/10"
                          : test.status === "warning"
                            ? "text-yellow-400 bg-yellow-400/10"
                            : "text-red-400 bg-red-400/10"
                        }`}>
                        {test.status === "normal" ? "✓ Normal" :
                          test.status === "warning" ? "⚠ Warning" :
                            "✗ Critical"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LabResultsContent;