import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../context/ThemeContext";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unread?: boolean; // opcional, para mensajes no leídos
}

const dummyChats: Chat[] = [
  {
    id: "1",
    name: "Galileo Zoe",
    lastMessage: "Hey, ¿cómo estás?",
    time: "10:30 AM",
    avatar: "https://placekitten.com/50/50",
    unread: true,
  },
  {
    id: "2",
    name: "Gemini",
    lastMessage: "Aquí va tu recomendación diaria...",
    time: "09:15 AM",
    avatar: "https://placekitten.com/51/51",
  },
  {
    id: "3",
    name: "Amigo",
    lastMessage: "Nos vemos en un rato 😎",
    time: "Ayer",
    avatar: "https://placekitten.com/52/52",
    unread: true,
  },
];

export const Chats: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 1;

  const renderItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity style={styles.chatContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={[styles.name, { color: isDark ? "#fff" : "#111" }]}>
            {item.name}
          </Text>
          <Text style={[styles.time, { color: isDark ? "#ccc" : "#888" }]}>
            {item.time}
          </Text>
        </View>
        <View style={styles.row}>
          <Text
            style={[styles.lastMessage, { color: isDark ? "#ddd" : "#555" }]}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {item.unread && <View style={styles.unreadDot} />}
            <TouchableOpacity style={{ padding: 6 }}>
              <Ionicons name="ellipsis-vertical" size={20} color="#555" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dummyChats}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: isDark ? "#333" : "#eee", marginVertical: 8 }} />
      )}
      contentContainerStyle={{ padding: 16, backgroundColor: isDark ? "#000" : "#fafafa" }}
    />
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
  time: {
    fontSize: 12,
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    marginRight: 8,
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#0b93f6",
    marginRight: 6,
  },
});
