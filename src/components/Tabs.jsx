import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ 
  tabs = [], 
  defaultActiveTab = 0, 
  onTabChange, 
  className = '',
  variant = 'default' 
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index, tabs[index]);
    }
  };

  const getTabClasses = (index) => {
    const baseClasses = 'nav-link';
    const activeClass = activeTab === index ? 'active' : '';
    
    switch (variant) {
      case 'pills':
        return `${baseClasses} ${activeClass}`;
      case 'underline':
        return `${baseClasses} ${activeClass}`;
      default:
        return `${baseClasses} ${activeClass}`;
    }
  };

  const getNavClasses = () => {
    switch (variant) {
      case 'pills':
        return 'nav nav-pills';
      case 'underline':
        return 'nav nav-underline';
      default:
        return 'nav nav-tabs';
    }
  };

  return (
    <div className={`tabs-container ${className}`}>
      {/* Tab Navigation */}
      <ul className={`${getNavClasses()} ${variant === 'underline' ? 'nav-underline-custom' : ''}`}>
        {tabs.map((tab, index) => (
          <li key={index} className="nav-item">
            <button
              className={getTabClasses(index)}
              onClick={() => handleTabClick(index)}
              disabled={tab.disabled}
            >
              {tab.icon && <i className={`${tab.icon} me-2`}></i>}
              {tab.label}
              {tab.badge && (
                <span className="badge bg-secondary ms-2">{tab.badge}</span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
            style={{ display: activeTab === index ? 'block' : 'none' }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};


export const PatientDashboardTabs = [
  {
    label: 'Overview',
    icon: 'fas fa-chart-line',
    content: null
  },
  {
    label: 'Medical History',
    icon: 'fas fa-history',
    content: null
  },
  {
    label: 'Lab Results',
    icon: 'fas fa-vial',
    content: null
  },
  {
    label: 'Prescriptions',
    icon: 'fas fa-prescription-bottle',
    content: null
  },
  {
    label: 'Appointments',
    icon: 'fas fa-calendar-alt',
    content: null,
    badge: '2'
  }
];

export const DoctorDashboardTabs = [
];

export const LabDashboardTabs = [
];

export default Tabs;