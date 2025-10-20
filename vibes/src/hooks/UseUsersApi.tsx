import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../interfaces/User";

const API_URL="http://192.168.100.04:3000/vibes/api/v1/users";

export const useUsersApi = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<User[]>(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error loading users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createUser = async (data: User) => {
    try {
      const response = await axios.post<User>(API_URL);
      console.log("User created:", response.data);
      loadUsers();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async (id: string, data: Partial<User>) => {
    try {
      const response = await axios.patch<User>(`${API_URL}/${id}`, data);
      console.log("User updated:", response.data);
      loadUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return { users, isLoading, loadUsers, createUser, updateUser, deleteUser };
};
