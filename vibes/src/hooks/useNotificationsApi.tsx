import { useState, useEffect } from "react";
import axios from "axios";

export interface Notification {
  _id?: string;
  title: string;
  message: string;
  read?: boolean;
  createdAt?: string;
}

const API_URL = "http://192.168.100.4:3000/vibes/api/v1/notifications";

export const useNotificationsApi = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setNotifications(res.data);
    } catch (err) {
      setError("Error fetching notifications");
    } finally {
      setLoading(false);
    }
  };

  const createNotification = async (notification: Notification) => {
    try {
      const res = await axios.post(API_URL, notification);
      setNotifications((prev) => [...prev, res.data]);
    } catch (err) {
      setError("Error creating notification");
    }
  };

  const markAsRead = async (id: string) => {
    try {
      await axios.patch(`${API_URL}/${id}`, { read: true });
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: true } : n))
      );
    } catch (err) {
      setError("Error marking as read");
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return { notifications, loading, error, createNotification, markAsRead };
};
