import { useState, useEffect } from "react";
import { Session } from "../interfaces/Session";
import { vibesApi } from "./vibesApi";


export const useSessionsApi = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const apiUrlSessions = "/vibes/api/v1/sessions";

  const loadSessions = async () => {
    setIsLoading(true);
    try {
      const response = await vibesApi.get<Session[]>(apiUrlSessions);
      setSessions(response.data);
    } catch (error) {
      console.error("Error cargando sesiones:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createSession = async (userId: string, topic: string) => {
    try {
      const response = await vibesApi.post(apiUrlSessions, {
        userId,
        topic,
      });
      console.log("Sesión creada:", response.data);
      loadSessions();
      return response.data;
    } catch (error) {
      console.error("Error creando sesión:", error);
    }
  };

  const getSessionsByUser = async (userId: string) => {
    try {
      const response = await vibesApi.get<Session[]>(`${apiUrlSessions}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error obteniendo sesiones del usuario:", error);
      return [];
    }
  };

  useEffect(() => {
    loadSessions();
  }, []);

  return {
    isLoading,
    sessions,
    loadSessions,
    createSession,
    getSessionsByUser,
  };
};
