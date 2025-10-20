import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { useGeminiApi } from "../../hooks/useGeminiApi";

interface Message {
  id: string;
  sender: string;
  content: string;
  createdAt: string;
}

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const { sendToGemini, loading } = useGeminiApi();

  const handleSend = async () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "Tú",
      content: message,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // Envía el mensaje al modelo Gemini
    const aiResponse = await sendToGemini(
      `Eres un asistente creativo, empático y profesional. Responde con consejos personalizados, 
      ideas, tips o reflexiones según el contexto del mensaje del usuario. 
      El mensaje del usuario es: "${message}"`
    );

    if (aiResponse) {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "Gemini",
        content: aiResponse,
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, padding: 16 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView>
        {messages.map((msg) => (
          <Card
            key={msg.id}
            title={msg.sender}
            description={`${msg.content}\n${new Date(msg.createdAt).toLocaleTimeString()}`}
          />
        ))}
      </ScrollView>

      <View style={{ marginTop: 10 }}>
        <Input
          value={message}
          onChangeText={setMessage}
          placeholder="Escribe un mensaje..."
        />
        <Button label={loading ? "Pensando..." : "Enviar"} onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
};
