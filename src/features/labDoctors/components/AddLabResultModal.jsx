// components/AddLabResultModal.jsx
import { X, Plus, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function AddLabResultModal({ isOpen, onClose, onAdd }) {
  const [testName, setTestName] = useState("");
  const [rows, setRows] = useState([
    { name: "", value: "", normal: "", unit: "", status: "normal" },
  ]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Validate main test name
    if (!testName.trim()) {
      newErrors.testName = "Main test name is required";
    } else if (testName.trim().length < 3) {
      newErrors.testName = "Test name must be at least 3 characters";
    }

    // Validate rows
    const rowErrors = [];
    rows.forEach((row, index) => {
      const rowError = {};
      if (!row.name.trim()) {
        rowError.name = "Sub-test name is required";
      }
      if (!row.value.trim()) {
        rowError.value = "Value is required";
      } else if (isNaN(Number(row.value)) && row.value !== "N/A") {
        rowError.value = "Value must be a number or 'N/A'";
      }
      if (!row.normal.trim()) {
        rowError.normal = "Normal range is required";
      }
      if (Object.keys(rowError).length > 0) {
        rowErrors[index] = rowError;
      }
    });

    if (rowErrors.length > 0) {
      newErrors.rows = rowErrors;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add new row
  const addRow = () => {
    if (rows.length < 10) {
      setRows([
        ...rows,
        { name: "", value: "", normal: "", unit: "", status: "normal" },
      ]);
    }
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

    // Auto-detect status based on value and normal range
    if (key === "value" || key === "normal") {
      const row = updated[index];
      if (row.value && row.normal) {
        try {
          const valueNum = parseFloat(row.value);
          const normalParts = row.normal.split("-");
          if (normalParts.length === 2) {
            const min = parseFloat(normalParts[0]);
            const max = parseFloat(normalParts[1]);
            if (valueNum < min) {
              updated[index].status = "danger";
            } else if (valueNum > max) {
              updated[index].status = "warning";
            } else {
              updated[index].status = "normal";
            }
          }
        } catch (e) {
          console.log(e);
          // If parsing fails, keep current status
        }
      }
    }

    setRows(updated);

    // Clear errors for this field
    if (errors.rows && errors.rows[index]) {
      const updatedErrors = { ...errors };
      delete updatedErrors.rows[index][key];
      if (Object.keys(updatedErrors.rows[index]).length === 0) {
        delete updatedErrors.rows[index];
      }
      if (Object.keys(updatedErrors.rows).length === 0) {
        delete updatedErrors.rows;
      }
      setErrors(updatedErrors);
    }
  };

  // Submit handler
  const submitHandler = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Filter out empty rows
    const filteredRows = rows.filter(
      (row) => row.name.trim() || row.value.trim() || row.normal.trim()
    );

    const newResult = {
      id: Date.now(),
      testName: testName.trim(),
      date: new Date().toISOString(),
      results: filteredRows
        .map((r) => ({
          name: r.name.trim(),
          value: r.value.trim(),
          normal: r.normal.trim(),
          unit: r.unit.trim(),
          status: r.status,
          statusLabel:
            r.status === "normal"
              ? "Normal"
              : r.status === "warning"
              ? "Warning"
              : "Critical",
        }))
        .filter((r) => r.name && r.value && r.normal), // Filter out any still empty rows
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    onAdd(newResult);
    setIsSubmitting(false);

    // Reset form
    setTestName("");
    setRows([{ name: "", value: "", normal: "", unit: "", status: "normal" }]);
    setErrors({});

    onClose();
  };

  // Close modal
  const handleClose = () => {
    setTestName("");
    setRows([{ name: "", value: "", normal: "", unit: "", status: "normal" }]);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-3 sm:p-4">
      <div
        className="bg-[#11294B] p-3 sm:p-5 lg:p-6 !rounded-lg sm:rounded-xl lg:rounded-2xl w-full max-w-2xl text-white relative shadow-2xl border-2 animate-scale-in max-h-[95vh] overflow-y-auto"
        style={{ borderColor: "rgba(22, 156, 246, 0.3)" }}
      >
        {/* Header */}
        <div className="mb-3 sm:mb-5 lg:mb-6 sticky top-0 bg-[#11294B] pb-2 -mx-3 sm:-mx-5 lg:-mx-6 px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between mb-1.5 sm:mb-3">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div
                className="p-1.5 sm:p-2 !rounded-full flex-shrink-0"
                style={{ backgroundColor: "rgba(22, 156, 246, 0.2)" }}
              >
                <Plus
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: "#169CF6" }}
                />
              </div>
              <h2 className="text-base sm:text-lg lg:text-2xl font-bold text-white truncate">
                Add Result
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 sm:p-2 !rounded-lg hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
              style={{ color: "#94A3B8" }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-white/60 text-xs">
            Fill in test name and sub-tests
          </p>
        </div>

        {/* Main Test Name */}
        <div className="mb-3 sm:mb-4 lg:mb-5">
          <label className="text-white font-medium mb-1.5 block text-xs sm:text-sm">
            Test Name *
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="CBC"
              value={testName}
              onChange={(e) => {
                setTestName(e.target.value);
                if (errors.testName) {
                  setErrors((prev) => ({ ...prev, testName: null }));
                }
              }}
              className={`w-full p-2 sm:p-2.5 lg:p-3 !rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                errors.testName
                  ? "border-2 border-red-500 bg-red-500/10"
                  : "border border-white/20 bg-white/5 focus:border-[#169CF6]"
              } outline-none text-white placeholder-white/40`}
            />
            {errors.testName && (
              <div className="flex items-center gap-2 mt-2 text-red-400 text-xs">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {errors.testName}
              </div>
            )}
          </div>
        </div>

        {/* Sub-tests Table */}
        <div className="mb-3 sm:mb-4 lg:mb-5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <label className="text-white font-medium text-xs">
              Sub-tests *
            </label>
            <span className="text-white/60 text-xs">{rows.length}/10</span>
          </div>

          <div className="space-y-2 max-h-[240px] sm:max-h-[300px] overflow-y-auto pr-2">
            {rows.map((row, index) => (
              <div
                key={index}
                className={`p-2 sm:p-3 !rounded-lg transition-all duration-300 ${
                  errors.rows && errors.rows[index]
                    ? "border-2 border-red-500 bg-red-500/10"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                <div className="flex items-start gap-2">
                  {/* Row Number */}
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-lg bg-white/10 text-white/60 font-medium text-xs">
                    {index + 1}
                  </div>

                  {/* Fields Grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-1.5 sm:gap-2">
                    {/* Sub-test Name */}
                    <div>
                      <label className="text-white/80 text-xs mb-0.5 block">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Test"
                        value={row.name}
                        onChange={(e) =>
                          updateRow(index, "name", e.target.value)
                        }
                        className={`w-full p-1.5 rounded-lg text-xs transition-all duration-200 ${
                          errors.rows && errors.rows[index]?.name
                            ? "border border-red-500 bg-red-500/10"
                            : "border border-white/10 bg-white/5 focus:border-[#169CF6]"
                        } outline-none text-white placeholder-white/40`}
                      />
                      {errors.rows && errors.rows[index]?.name && (
                        <div className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Required
                        </div>
                      )}
                    </div>

                    {/* Value */}
                    <div>
                      <label className="text-white/80 text-xs mb-0.5 block">
                        Value
                      </label>
                      <input
                        type="text"
                        placeholder="15"
                        value={row.value}
                        onChange={(e) =>
                          updateRow(index, "value", e.target.value)
                        }
                        className={`w-full p-1.5 rounded-lg text-xs transition-all duration-200 ${
                          errors.rows && errors.rows[index]?.value
                            ? "border border-red-500 bg-red-500/10"
                            : "border border-white/10 bg-white/5 focus:border-[#169CF6]"
                        } outline-none text-white placeholder-white/40`}
                      />
                      {errors.rows && errors.rows[index]?.value && (
                        <div className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Invalid
                        </div>
                      )}
                    </div>

                    {/* Normal Range */}
                    <div>
                      <label className="text-white/80 text-xs mb-0.5 block">
                        Normal
                      </label>
                      <input
                        type="text"
                        placeholder="13-18"
                        value={row.normal}
                        onChange={(e) =>
                          updateRow(index, "normal", e.target.value)
                        }
                        className={`w-full p-1.5 rounded-lg text-xs transition-all duration-200 ${
                          errors.rows && errors.rows[index]?.normal
                            ? "border border-red-500 bg-red-500/10"
                            : "border border-white/10 bg-white/5 focus:border-[#169CF6]"
                        } outline-none text-white placeholder-white/40`}
                      />
                      {errors.rows && errors.rows[index]?.normal && (
                        <div className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Required
                        </div>
                      )}
                    </div>

                    {/* Status */}
                    <div>
                      <label className="text-white/80 text-xs mb-0.5 block">
                        Status
                      </label>
                      <div className="flex items-center gap-1">
                        <select
                          value={row.status}
                          onChange={(e) =>
                            updateRow(index, "status", e.target.value)
                          }
                          className="flex-1 p-1.5 rounded-lg text-xs border border-white/10 bg-white/5 focus:border-[#169CF6] outline-none text-white"
                        >
                          <option
                            value="normal"
                            className="bg-[#11294B] text-green-400"
                          >
                            Normal
                          </option>
                          <option
                            value="warning"
                            className="bg-[#11294B] text-yellow-400"
                          >
                            Warning
                          </option>
                          <option
                            value="danger"
                            className="bg-[#11294B] text-red-400"
                          >
                            Critical
                          </option>
                        </select>
                        <div
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            row.status === "normal"
                              ? "bg-green-500"
                              : row.status === "warning"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        />
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

        {/* Add Row Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
          <button
            onClick={addRow}
            disabled={rows.length >= 10}
            className="flex items-center justify-center sm:justify-start gap-1.5 px-2 sm:px-3 py-1.5 !rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-xs w-full sm:w-auto"
            style={{
              backgroundColor:
                rows.length < 10
                  ? "rgba(22, 156, 246, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
              color: rows.length < 10 ? "#169CF6" : "#94A3B8",
              border: `1px solid ${
                rows.length < 10
                  ? "rgba(22, 156, 246, 0.3)"
                  : "rgba(255, 255, 255, 0.1)"
              }`,
            }}
          >
            <Plus className="w-4 h-4" />
            Add Sub-test
          </button>

          <div className="text-xs text-white/60">
            {rows.filter((r) => r.name && r.value && r.normal).length} valid
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
          <button
            onClick={handleClose}
            className="flex-1 px-3 sm:px-4 py-2 !rounded-lg font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            Cancel
          </button>

          <button
            onClick={submitHandler}
            disabled={isSubmitting}
            className="flex-1 px-3 sm:px-4 py-2 !rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 text-xs sm:text-sm"
            style={{
              backgroundColor: "#169CF6",
              color: "white",
            }}
          >
            {isSubmitting ? (
              <>
                <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white !rounded-full animate-spin" />
                <span className="hidden sm:inline">Saving</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Save</span>
              </>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}