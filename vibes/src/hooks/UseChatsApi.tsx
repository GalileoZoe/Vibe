import { useState, useEffect } from "react";
import axios from "axios";

export interface Chat {
  _id?: string;
  sender: string;
  receiver: string;
  message: string;
  timestamp?: string;
}

const API_URL = "http://localhost:3000/api/v1/chats";

export const useChatsApi = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchChats = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setChats(res.data);
    } catch (err) {
      setError("Error fetching chats");
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (chat: Chat) => {
    try {
      const res = await axios.post(API_URL, chat);
      setChats((prev) => [...prev, res.data]);
    } catch (err) {
      setError("Error sending message");
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return { chats, loading, error, sendMessage };
};
