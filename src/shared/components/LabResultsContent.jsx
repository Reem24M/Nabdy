import React from "react";

export default function LabResultsContent({ patient }) {
  if (!patient.labResults || patient.labResults.length === 0) {
    return <div className="text-slate-400">No lab results available.</div>;
  }

  return (
    <div className="space-y-4">
      {patient.labResults.map((r) => (
        <div key={r.id} className="p-4 rounded-2xl bg-[#031617]/50">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{r.testName}</h4>
            <div className="text-xs text-slate-400">{new Date(r.date).toLocaleDateString()}</div>
          </div>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-slate-400">
                <tr><th className="py-2">Test</th><th>Result</th><th>Normal</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {r.results.map((res,i)=>(
                  <tr key={i}>
                    <td className="py-2">{res.name}</td>
                    <td className="font-semibold">{res.value}</td>
                    <td className="text-slate-400">{res.normal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
