import { useState } from "react";
import Constants from "expo-constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = Constants.expoConfig?.extra?.geminiApiKey || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const useGeminiApi = () => {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendToGemini = async (prompt: string) => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
      return text;
    } catch (err: any) {
      setError("Error al generar respuesta.");
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, sendToGemini };
};
