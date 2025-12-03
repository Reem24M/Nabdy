// components/LabResultsSection.jsx
import { PlusCircle, Download, Filter, Calendar, Search, AlertCircle, ChevronRight, TrendingUp, FileText } from "lucide-react";
import { useState } from "react";

export default function LabResultsSection({ labResults, onOpenModal }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Filter and sort results
  const filteredResults = labResults
    .filter(test => {
      const matchesSearch = test.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.results.some(res => res.name.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = filterStatus === "all" || 
        test.results.some(res => res.status === filterStatus);
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "name") return a.testName.localeCompare(b.testName);
      return 0;
    });

  const getStatusCount = (status) => {
    return labResults.reduce((count, test) => {
      return count + test.results.filter(res => res.status === status).length;
    }, 0);
  };


  return (
    <div className="rounded-2xl mt-6 text-white" style={{ backgroundColor: '#0F234A' }}>
      <div className="p-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)' }}>
              <FileText className="w-5 h-5" style={{ color: '#169CF6' }} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Lab Results</h2>
              <p className="text-white/60 text-xs mt-0.5">
                {labResults.length} tests, {labResults.reduce((sum, test) => sum + test.results.length, 0)} total results
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
          
            
            <button
              onClick={onOpenModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
              style={{ 
                backgroundColor: '#169CF6',
                color: 'white'
              }}
            >
              <PlusCircle className="w-4 h-4" />
              Add New
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs">Normal</p>
                <p className="text-lg font-bold text-green-400">{getStatusCount("normal")}</p>
              </div>
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs">Warning</p>
                <p className="text-lg font-bold text-yellow-400">{getStatusCount("warning")}</p>
              </div>
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)' }}>
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs">Critical</p>
                <p className="text-lg font-bold text-red-400">{getStatusCount("danger")}</p>
              </div>
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)' }}>
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(22, 156, 246, 0.1)', border: '1px solid rgba(22, 156, 246, 0.2)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-xs">Total Tests</p>
                <p className="text-lg font-bold text-[#0F234A]">{labResults.length}</p>
              </div>
              <TrendingUp className="w-5 h-5" style={{ color: '#0F234A' }} />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search tests or sub-tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg text-sm text-white placeholder-white/40 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                outline: 'none'
              }}
            />
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <Filter className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-8 pr-6 py-2 rounded-lg appearance-none text-sm text-white transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  outline: 'none'
                }}
              >
                <option value="all" className="bg-[#11294B] text-xs">All Status</option>
                <option value="normal" className="bg-[#11294B] text-green-400 text-xs">Normal</option>
                <option value="warning" className="bg-[#11294B] text-yellow-400 text-xs">Warning</option>
                <option value="danger" className="bg-[#11294B] text-red-400 text-xs">Critical</option>
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-8 pr-6 py-2 rounded-lg appearance-none text-sm text-white transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  outline: 'none'
                }}
              >
                <option value="date" className="bg-[#11294B] text-xs">Sort by Date</option>
                <option value="name" className="bg-[#11294B] text-xs">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="p-4">
        {labResults.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-flex p-3 rounded-xl mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <AlertCircle className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">No Lab Results Yet</h3>
            <p className="text-white/60 text-sm mb-4">Start by adding your first lab result</p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
              style={{ 
                backgroundColor: '#169CF6',
                color: 'white'
              }}
            >
              <PlusCircle className="w-4 h-4" />
              Add First Result
            </button>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-flex p-3 rounded-xl mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <Search className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-base font-bold text-white mb-1.5">No Results Found</h3>
            <p className="text-white/60 text-sm">Try changing your search or filter criteria</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredResults.map((test) => {
              const criticalCount = test.results.filter(r => r.status === "danger").length;
              const warningCount = test.results.filter(r => r.status === "warning").length;
              
              return (
                <div 
                  key={test.id}
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.005] group"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Test Header */}
                  <div className="p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(22, 156, 246, 0.2)' }}>
                            <FileText className="w-4 h-4" style={{ color: '#169CF6' }} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white mb-1 group-hover:text-[#169CF6] transition-colors duration-300">
                            {test.testName}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-1.5 text-white/60 text-xs">
                              <Calendar className="w-3 h-3" />
                              {new Date(test.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="flex items-center gap-1.5 text-white/60 text-xs">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              {test.results.length} sub-tests
                            </div>
                            {criticalCount > 0 && (
                              <div className="flex items-center gap-1.5 text-red-400 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                {criticalCount} critical
                              </div>
                            )}
                            {warningCount > 0 && (
                              <div className="flex items-center gap-1.5 text-yellow-400 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                {warningCount} warnings
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#169CF6] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Results Table */}
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-full">
                        <thead>
                          <tr className="text-left text-white/60 text-xs" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
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
                                  <div className={`w-1.5 h-1.5 rounded-full ${
                                    res.status === "normal" ? "bg-green-500" :
                                    res.status === "warning" ? "bg-yellow-500" :
                                    "bg-red-500"
                                  }`} />
                                  <span className="text-white text-sm font-medium">{res.name}</span>
                                </div>
                              </td>
                              <td className="py-2">
                                <span className="text-white text-sm font-semibold">{res.value}</span>
                                {res.unit && <span className="text-white/60 text-xs ml-1">{res.unit}</span>}
                              </td>
                              <td className="py-2">
                                <span className="text-white/80 text-sm">{res.normal}</span>
                              </td>
                              <td className="py-2 text-left">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                                  res.status === "normal" 
                                    ? "text-green-400 bg-green-400/10" 
                                    : res.status === "warning"
                                    ? "text-yellow-400 bg-yellow-400/10"
                                    : "text-red-400 bg-red-400/10"
                                }`}>
                                  {res.status === "normal" ? "✓ Normal" :
                                   res.status === "warning" ? "⚠ Warning" : 
                                   "✗ Critical"}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}