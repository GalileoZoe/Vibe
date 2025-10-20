import { useState, useEffect } from "react";
import { Tip } from "../interfaces/Tip";
import { vibesApi } from "./vibesApi";

export const useTipsApi = () => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadTips = async () => {
    setIsLoading(true);
    try {
      const response = await vibesApi.get<Tip[]>("/tips");
      setTips(response.data);
    } catch (error) {
      console.error("Error loading tips:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTipsByCategory = async (category: string) => {
    try {
      const response = await vibesApi.get<Tip[]>(`/tips/category/${category}`);
      return response.data;
    } catch (error) {
      console.error("Error loading tips by category:", error);
      return [];
    }
  };

  useEffect(() => {
    loadTips();
  }, []);

  return { tips, isLoading, loadTips, getTipsByCategory };
};
