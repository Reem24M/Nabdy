import React, { useState, useEffect } from "react";
import "./Tabs.css";

const Tabs = ({
  tabs = [],
  defaultActiveTab = 0,
  onTabChange,
  className = "",
  variant = "default",
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setShowMobileMenu(false);
    if (onTabChange) onTabChange(index, tabs[index]);
  };

  const handlePrevTab = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : tabs.length - 1));
  };

  const handleNextTab = () => {
    setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : 0));
  };

  const getTabClasses = (index) => {
    const baseClasses =
      "px-4 py-2 !rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap";
    switch (variant) {
      case "pills":
        return `${baseClasses} ${
          activeTab === index
            ? "bg-[#169CF6] text-white"
            : "bg-transparent text-white/60 hover:text-white hover:bg-white/5"
        }`;
      case "underline":
        return `${baseClasses} ${
          activeTab === index
            ? "text-[#169CF6] border-b-2 border-[#169CF6] pb-2"
            : "text-white/60 hover:text-white"
        }`;
      default:
        return `${baseClasses} ${
          activeTab === index
            ? "bg-[#169CF6] text-white"
            : "bg-transparent text-white/60 hover:text-white hover:bg-white/5"
        }`;
    }
  };

  // Mobile View
  if (isMobile) {
    return (
      <div className={`tabs-container ${className}`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 !rounded-lg text-white text-sm"
          >
            <i className="fas fa-bars"></i>
            <span>Menu</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevTab}
              className="p-2 bg-white/5 hover:bg-white/10 !rounded-lg text-white"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={handleNextTab}
              className="p-2 bg-white/5 hover:bg-white/10 !rounded-lg text-white"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="mb-4 bg-[#0A1A3A] border border-white/10 !rounded-lg p-2 space-y-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`w-full text-left px-3 py-2.5 !rounded-lg text-sm ${
                  activeTab === index
                    ? "bg-[#169CF6] text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.icon && <i className={`${tab.icon} mr-2`}></i>}
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Current Tab Indicator */}
        <div className="px-4 py-3 bg-white/5 !rounded-lg text-center mb-4">
          <span className="text-white text-sm font-medium">
            {tabs[activeTab]?.label || "No tab selected"}
          </span>
          <div className="text-xs text-white/50 mt-1">
            {activeTab + 1} of {tabs.length}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {tabs[activeTab]?.content || (
            <div className="text-white/60 p-4">No content available</div>
          )}
        </div>

        {/* Mobile Footer */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevTab}
              className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 !rounded-lg text-white text-sm"
            >
              <i className="fas fa-chevron-left"></i>
              <span className="hidden xs:inline">Previous</span>
            </button>
            <div className="flex items-center gap-1.5">
              {tabs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`w-2 h-2 !rounded-full ${
                    activeTab === index
                      ? "bg-[#169CF6]"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNextTab}
              className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 !rounded-lg text-white text-sm"
            >
              <span className="hidden xs:inline">Next</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className={`tabs-container ${className}`}>
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-[#169CF6]/30 scrollbar-track-transparent">
        <div className="flex gap-2 mb-4 pb-1 min-w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={getTabClasses(index)}
              onClick={() => handleTabClick(index)}
              disabled={tab.disabled}
            >
              {tab.icon && <i className={`${tab.icon} mr-2`}></i>}
              {tab.label}
              {tab.badge && (
                <span className="ml-2 px-1.5 py-0.5 bg-white/10 text-white/80 text-xs !rounded-full">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content mt-3">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;