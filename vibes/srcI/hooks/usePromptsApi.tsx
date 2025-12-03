import { useState, useEffect } from "react";
import axios from "axios";
import { vibesApi } from "./vibesApi";
import { Prompt } from "../interfaces/Prompt";

export const usePromptsApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const apiUrlPrompts = "/vibes/api/v1/prompts";

  // Cargar todos los prompts
  const loadPrompts = async () => {
    setIsLoading(true);
    try {
      const response = await vibesApi.get<Prompt[]>(apiUrlPrompts);
      setPrompts(response.data);
    } catch (error) {
      console.error("Error cargando Prompts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Crear un nuevo prompt
  const createPrompt = async (data: Prompt) => {
    try {
      const response = await vibesApi.post(apiUrlPrompts, data);
      console.log("Prompt creado:", response.data);
      await loadPrompts();
    } catch (error) {
      console.error("Error creando Prompt:", error);
    }
  };

  // Generar un prompt automático con Gemini
  const generatePromptWithGemini = async (topic: string) => {
    try {
      setIsLoading(true);
      const response = await vibesApi.post("/vibes/api/v1/prompts", {
        category: "auto",
        content: `Genera una afirmación inspiradora sobre ${topic} con enfoque en Ley de Atracción.`,
      });

      console.log("Prompt generado:", response.data);
      await loadPrompts();
      return response.data;
    } catch (error) {
      console.error("Error generando Prompt:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const deletePrompt = async (id: string) => {
    try {
      await vibesApi.delete(`${apiUrlPrompts}/${id}`);
      loadPrompts();
    } catch (error) {
      console.error("Error eliminando Prompt:", error);
    }
  };

  const updatePrompt = async (id: string, data: Partial<Prompt>) => {
    try {
      await vibesApi.patch(`${apiUrlPrompts}/${id}`, data);
      loadPrompts();
    } catch (error) {
      console.error("Error actualizando Prompt:", error);
    }
  };

  useEffect(() => {
    loadPrompts();
  }, []);

  return {
    isLoading,
    prompts,
    loadPrompts,
    createPrompt,
    updatePrompt,
    deletePrompt,
    generatePromptWithGemini,
  };
};
