import { useState, useEffect } from "react";
import { vibesApi } from "./vibesApi";


export const useTextsApi = () => {
  const [texts, setTexts] = useState<Text[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const apiUrlTexts = "/vibes/api/v1/texts";

  const loadTexts = async () => {
    setIsLoading(true);
    try {
      const response = await vibesApi.get<Text[]>(apiUrlTexts);
      setTexts(response.data);
    } catch (error) {
      console.error("Error cargando Textos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createText = async (content: string, sessionId: string, userId: string) => {
    try {
      const response = await vibesApi.post(apiUrlTexts, {
        content,
        sessionId,
        userId,
      });
      console.log("Texto creado:", response.data);
      loadTexts();
    } catch (error) {
      console.error("Error creando Texto:", error);
    }
  };

  const generateTextWithGemini = async (prompt: string, userId: string) => {
    try {
      const response = await vibesApi.post("/vibes/api/v1/texts", {
        content: `Genera una afirmación poderosa basada en: "${prompt}"`,
        userId,
      });
      console.log("Texto generado con Gemini:", response.data);
      loadTexts();
      return response.data;
    } catch (error) {
      console.error("Error generando texto con Gemini:", error);
      return null;
    }
  };

  useEffect(() => {
    loadTexts();
  }, []);

  return {
    isLoading,
    texts,
    loadTexts,
    createText,
    generateTextWithGemini,
  };
};
