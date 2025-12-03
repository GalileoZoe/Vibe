import { useState, useEffect } from "react";
import { Settings } from "react-native";
import { vibesApi } from "./vibesApi";


export const useSettingsApi = (userId: string) => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const apiUrlSettings = `/vibes/api/v1/settings/${userId}`;

  const loadSettings = async () => {
    setIsLoading(true);
    try {
      const response = await vibesApi.get<Settings>(apiUrlSettings);
      setSettings(response.data);
    } catch (error) {
      console.error("Error cargando Settings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSettings = async (updates: Partial<Settings>) => {
    try {
      const response = await vibesApi.patch(apiUrlSettings, updates);
      console.log("Configuraciones actualizadas:", response.data);
      setSettings(response.data);
    } catch (error) {
      console.error("Error actualizando Settings:", error);
    }
  };

  useEffect(() => {
    loadSettings();
  }, [userId]);

  return {
    isLoading,
    settings,
    loadSettings,
    updateSettings,
  };
};
