import React, { useState } from 'react';
import './NotificationSystem.css';

const NotificationSystem = ({ notifications = [], onMarkAsRead, onDeleteNotification }) => {
  const [filter, setFilter] = useState('all');
  const [isOpen, setIsOpen] = useState(false);

  // Sample notifications data for demonstration
  const sampleNotifications = [
    {
      id: 1,
      title: "Lab Results Available",
      message: "Your blood test results from Cairo Medical Lab are now available.",
      type: "info",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isRead: false,
      priority: "normal"
    },
    {
      id: 2,
      title: "Appointment Reminder",
      message: "You have an appointment with Dr. Ahmed tomorrow at 10:00 AM.",
      type: "warning",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      isRead: false,
      priority: "high"
    },
    {
      id: 3,
      title: "Prescription Ready",
      message: "Your prescription for diabetes medication is ready for pickup.",
      type: "success",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      isRead: true,
      priority: "normal"
    },
    {
      id: 4,
      title: "Emergency Contact Update",
      message: "Please update your emergency contact information.",
      type: "danger",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
      isRead: false,
      priority: "urgent"
    }
  ];

  const displayNotifications = notifications.length > 0 ? notifications : sampleNotifications;
  const unreadCount = displayNotifications.filter(n => !n.isRead).length;

  const filteredNotifications = displayNotifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.isRead;
    if (filter === 'urgent') return notification.priority === 'urgent';
    return notification.type === filter;
  });

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success': return 'fas fa-check-circle text-success';
      case 'warning': return 'fas fa-exclamation-triangle text-warning';
      case 'danger': return 'fas fa-exclamation-circle text-danger';
      case 'info': return 'fas fa-info-circle text-info';
      default: return 'fas fa-bell text-primary';
    }
  };

  const handleNotificationClick = (notification) => {
    if (!notification.isRead && onMarkAsRead) {
      onMarkAsRead(notification.id);
    }
  };

  const handleDeleteNotification = (e, notificationId) => {
    e.stopPropagation();
    if (onDeleteNotification) {
      onDeleteNotification(notificationId);
    }
  };

  return (
    <div className="notification-system">
      {/* Notification Bell */}
      <div className="notification-bell position-relative">
        <button 
          className="btn btn-outline-primary position-relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bell"></i>
          {unreadCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Notification Panel */}
      {isOpen && (
        <div className="notification-panel">
          <div className="notification-header flex justify-content-between align-items-center mb-3">
            <h6 className="mb-0">Notifications</h6>
            <button 
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="notification-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({displayNotifications.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread ({unreadCount})
            </button>
            <button 
              className={`filter-btn ${filter === 'urgent' ? 'active' : ''}`}
              onClick={() => setFilter('urgent')}
            >
              Urgent
            </button>
          </div>

          {/* Notifications List */}
          <div className="notifications-list">
            {filteredNotifications.length === 0 ? (
              <div className="text-center text-muted py-4">
                <i className="fas fa-bell-slash fa-2x mb-2"></i>
                <p>No notifications found</p>
              </div>
            ) : (
              filteredNotifications.map(notification => (
                <div 
                  key={notification.id}
                  className={`notification-item ${!notification.isRead ? 'unread' : ''} ${notification.priority === 'urgent' ? 'urgent' : ''}`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="d-flex align-items-start">
                    <div className="notification-icon me-3">
                      <i className={getNotificationIcon(notification.type)}></i>
                    </div>
                    <div className="notification-content flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <h6 className="notification-title mb-1">{notification.title}</h6>
                        <div className="notification-actions">
                          <span className="notification-time text-muted small">
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          <button 
                            className="btn btn-sm btn-outline-danger ms-2"
                            onClick={(e) => handleDeleteNotification(e, notification.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                      <p className="notification-message mb-0 text-muted">
                        {notification.message}
                      </p>
                      {notification.priority === 'urgent' && (
                        <span className="badge bg-danger mt-2">URGENT</span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          <div className="notification-footer">
            <button className="btn btn-sm btn-outline-primary">
              Mark All as Read
            </button>
            <button className="btn btn-sm btn-outline-secondary">
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
