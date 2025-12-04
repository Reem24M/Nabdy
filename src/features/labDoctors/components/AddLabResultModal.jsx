// components/AddLabResultModal.jsx
import { X, Plus, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function AddLabResultModal({ isOpen, onClose, onAdd }) {
  const [testName, setTestName] = useState("");
  const [rows, setRows] = useState([{ name: "", value: "", normal: "", unit: "", status: "normal" }]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!testName.trim()) newErrors.testName = "Main test name is required";
    else if (testName.trim().length < 3) newErrors.testName = "Test name must be at least 3 characters";

    const rowErrors = [];
    rows.forEach((row, index) => {
      const rowError = {};
      if (!row.name.trim()) rowError.name = "Sub-test name is required";
      if (!row.value.trim()) rowError.value = "Value is required";
      else if (isNaN(Number(row.value)) && row.value !== 'N/A') rowError.value = "Value must be a number or 'N/A'";
      if (!row.normal.trim()) rowError.normal = "Normal range is required";
      if (Object.keys(rowError).length > 0) rowErrors[index] = rowError;
    });
    if (rowErrors.length > 0) newErrors.rows = rowErrors;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add new row
  const addRow = () => {
    if (rows.length < 10) setRows([...rows, { name: "", value: "", normal: "", unit: "", status: "normal" }]);
  };

  // Remove row
  const removeRow = (index) => {
    if (rows.length > 1) {
      const updated = [...rows];
      updated.splice(index, 1);
      setRows(updated);
    }
  };

  // Update row
  const updateRow = (index, key, value) => {
    const updated = [...rows];
    updated[index][key] = value;

    // Auto-detect status
    if (key === "value" || key === "normal") {
      const row = updated[index];
      if (row.value && row.normal) {
        try {
          const valueNum = parseFloat(row.value);
          const normalParts = row.normal.split("-");
          if (normalParts.length === 2) {
            const min = parseFloat(normalParts[0]);
            const max = parseFloat(normalParts[1]);
            updated[index].status = valueNum < min ? "danger" : valueNum > max ? "warning" : "normal";
          }
        } catch (e) {
          console.error("Error parsing value/normal range:", e);
        }
      }
    }

    setRows(updated);

    // Clear errors for this field
    if (errors.rows && errors.rows[index]) {
      const updatedErrors = { ...errors };
      delete updatedErrors.rows[index][key];
      if (Object.keys(updatedErrors.rows[index]).length === 0) delete updatedErrors.rows[index];
      if (Object.keys(updatedErrors.rows).length === 0) delete updatedErrors.rows;
      setErrors(updatedErrors);
    }
  };

  // Submit
  const submitHandler = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    const filteredRows = rows.filter(row => row.name && row.value && row.normal);
    const newResult = {
      id: Date.now(),
      testName: testName.trim(),
      date: new Date().toISOString(),
      results: filteredRows.map(r => ({
        name: r.name.trim(),
        value: r.value.trim(),
        normal: r.normal.trim(),
        unit: r.unit.trim(),
        status: r.status,
        statusLabel: r.status === "normal" ? "Normal" : r.status === "warning" ? "Warning" : "Critical",
      }))
    };

    await new Promise(resolve => setTimeout(resolve, 800));

    onAdd(newResult);
    setIsSubmitting(false);

    setTestName("");
    setRows([{ name: "", value: "", normal: "", unit: "", status: "normal" }]);
    setErrors({});
    onClose();
  };

  const handleClose = () => {
    setTestName("");
    setRows([{ name: "", value: "", normal: "", unit: "", status: "normal" }]);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4 sm:p-6">
      <div className="bg-[#11294B] w-full max-w-2xl p-4 sm:p-6 md:p-8 rounded-2xl text-white shadow-2xl border-2 animate-scale-in overflow-y-auto max-h-[90vh]"
           style={{ borderColor: "rgba(22, 156, 246, 0.3)" }}
      >
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between items-center mb-2 sm:mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-blue-600/20">
                <Plus className="w-6 h-6 text-[#169CF6]" />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold">Add New Lab Result</h2>
            </div>
            <button onClick={handleClose} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <p className="text-white/60 text-sm sm:text-base">
            Fill in the main test name and add sub-tests with their values and normal ranges
          </p>
        </div>

        {/* Main Test Name */}
        <div className="mb-4 sm:mb-6">
          <label className="block mb-1 text-white font-medium">Main Test Name *</label>
          <input
            type="text"
            placeholder="e.g., Complete Blood Count (CBC)"
            value={testName}
            onChange={(e) => {
              setTestName(e.target.value);
              if (errors.testName) setErrors(prev => ({ ...prev, testName: null }));
            }}
            className={`w-full p-3 rounded-lg text-white text-sm sm:text-base outline-none transition-all duration-200 ${
              errors.testName ? "border-2 border-red-500 bg-red-500/10" : "border border-white/20 bg-white/5 focus:border-[#169CF6]"
            }`}
          />
          {errors.testName && (
            <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4" /> {errors.testName}
            </div>
          )}
        </div>

        {/* Sub-tests */}
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-white font-medium">Sub-tests *</label>
            <span className="text-white/60 text-xs sm:text-sm">{rows.length} / 10 rows</span>
          </div>

          <div className="space-y-3 max-h-[300px] sm:max-h-[320px] overflow-y-auto pr-2">
            {rows.map((row, index) => (
              <div key={index} className={`p-3 sm:p-4 rounded-lg transition-all duration-200 ${errors.rows && errors.rows[index] ? 'border-2 border-red-500 bg-red-500/10' : 'bg-white/5 border border-white/10'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white/60 font-medium">
                    {index + 1}
                  </div>

                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {/* Name */}
                    <div>
                      <label className="text-white/80 text-xs mb-1 block">Name *</label>
                      <input
                        type="text"
                        placeholder="e.g., Hemoglobin"
                        value={row.name}
                        onChange={(e) => updateRow(index, "name", e.target.value)}
                        className={`w-full p-2 rounded-lg text-sm transition-all duration-200 ${errors.rows && errors.rows[index]?.name ? "border border-red-500 bg-red-500/10" : "border border-white/10 bg-white/5 focus:border-[#169CF6]"} outline-none text-white placeholder-white/40`}
                      />
                      {errors.rows && errors.rows[index]?.name && (
                        <div className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.rows[index].name}
                        </div>
                      )}
                    </div>

                    {/* Value */}
                    <div>
                      <label className="text-white/80 text-xs mb-1 block">Value *</label>
                      <input
                        type="text"
                        placeholder="e.g., 14.5"
                        value={row.value}
                        onChange={(e) => updateRow(index, "value", e.target.value)}
                        className={`w-full p-2 rounded-lg text-sm transition-all duration-200 ${errors.rows && errors.rows[index]?.value ? "border border-red-500 bg-red-500/10" : "border border-white/10 bg-white/5 focus:border-[#169CF6]"} outline-none text-white placeholder-white/40`}
                      />
                      {errors.rows && errors.rows[index]?.value && (
                        <div className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.rows[index].value}
                        </div>
                      )}
                    </div>

                    {/* Normal Range */}
                    <div>
                      <label className="text-white/80 text-xs mb-1 block">Normal Range *</label>
                      <input
                        type="text"
                        placeholder="e.g., 13.5-17.5"
                        value={row.normal}
                        onChange={(e) => updateRow(index, "normal", e.target.value)}
                        className={`w-full p-2 !rounded-lg text-sm transition-all duration-200 ${errors.rows && errors.rows[index]?.normal ? "border border-red-500 bg-red-500/10" : "border border-white/10 bg-white/5 focus:border-[#169CF6]"} outline-none text-white placeholder-white/40`}
                      />
                      {errors.rows && errors.rows[index]?.normal && (
                        <div className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.rows[index].normal}
                        </div>
                      )}
                    </div>

                    {/* Status */}
                    <div>
                      <label className="text-white/80 text-xs mb-1 block">Status</label>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <select
                          value={row.status}
                          onChange={(e) => updateRow(index, "status", e.target.value)}
                          className="w-full sm:w-auto p-2 !rounded-lg text-sm border border-white/10 bg-white/5 focus:border-[#169CF6] outline-none text-white"
                        >
                          <option value="normal" className="bg-[#11294B] text-green-400">Normal</option>
                          <option value="warning" className="bg-[#11294B] text-yellow-400">Warning</option>
                          <option value="danger" className="bg-[#11294B] text-red-400">Critical</option>
                        </select>
                        <div className={`w-3 h-3 !rounded-full flex-shrink-0 ${row.status === "normal" ? "bg-green-500" : row.status === "warning" ? "bg-yellow-500" : "bg-red-500"}`} />
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  {rows.length > 1 && (
                    <button
                      onClick={() => removeRow(index)}
                      className="flex-shrink-0 p-2 !rounded-lg hover:bg-red-500/20 text-white/60 hover:text-red-400 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
          <button
            onClick={addRow}
            disabled={rows.length >= 10}
            className="flex items-center gap-2 px-4 py-2.5 !rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: rows.length < 10 ? "rgba(22, 156, 246, 0.2)" : "rgba(255, 255, 255, 0.1)",
              color: rows.length < 10 ? "#169CF6" : "#94A3B8",
              border: `1px solid ${rows.length < 10 ? "rgba(22, 156, 246, 0.3)" : "rgba(255, 255, 255, 0.1)"}`
            }}
          >
            <Plus className="w-4 h-4" />
            Add Sub-test
          </button>
          <div className="text-white/60 text-sm">
            {rows.filter(r => r.name && r.value && r.normal).length} valid rows
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleClose}
            className="flex-1 px-6 py-3 !rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Cancel
          </button>
          <button
            onClick={submitHandler}
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 !rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#169CF6", color: "white" }}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </div>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" /> Save Result
              </>
            )}
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { opacity: 0; transform: translateY(-20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}
