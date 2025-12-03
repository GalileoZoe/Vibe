import { useState, useEffect, useCallback } from "react";
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

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setNotifications(res.data);
    } catch (err) {
      setError("Error fetching notifications");
    } finally {
      setLoading(false);
    }
  }, []);

  const createNotification = async (notification: Notification) => {
    try {
      const res = await axios.post(API_URL, notification);
      setNotifications((prev) => [res.data, ...prev]); // Se agrega arriba, como las nuevas
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
  }, [fetchNotifications]);

  return { notifications, loading, error, fetchNotifications, createNotification, markAsRead };
};
