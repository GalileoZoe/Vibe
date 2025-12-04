import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigationState } from "@react-navigation/native";

import { BottomTabs } from "./BottomTabs";
import { useModal } from "../context/ModalContext";
import { Settings } from "../components/screens/Settings/Settings";
import { Account } from "../components/screens/Account/Account";
import { Notifications } from "../components/screens/Notifications/Notifications";
import { Privacy } from "../components/screens/Privacy/Privacy";
import { Profile } from "../components/screens/Profile/Profile";

const Stack = createNativeStackNavigator();

// Mapa simple de íconos por screen
const headerIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  Chats: "chatbubble-ellipses-outline",
  Chat: "chatbubble-ellipses-outline",
  IA: "sparkles-outline",
  Settings: "settings-outline",
  Notifications: "notifications-outline",
  Home: "home-outline",
  Privacy: "finger-print-outline",
  Profile: "person-circle-outline",
};
 
export const AppNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={NavigatorWithHeader} />

       <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
 
const NavigatorWithHeader=()=> {
  const { showModal } = useModal();

  // Detectar screen ACTIVA dentro de BottomTabs
const activeRouteName = useNavigationState((state) => {
  const mainRoute = state.routes[0];

  // Puede ser undefined al inicio → safe fallback
  const tabState: any = mainRoute?.state;

  const index = tabState?.index ?? 0;
  const routeName = tabState?.routes?.[index]?.name;

  return routeName ?? "Home";
});

  const icon = headerIcons[activeRouteName] ?? "ellipse";

  return (
    <>
      {/* 🔥 HEADER DINÁMICO */}
      <View
        style={{
          backgroundColor: "#fafafa",
          paddingVertical: 14,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons name={icon} size={22} color="#333" />

          <Text style={{ fontSize: 20, fontWeight: "700", color: "#333" }}>
            {activeRouteName}
          </Text>
        </View>

        <TouchableOpacity onPress={() => showModal(
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Opciones de {activeRouteName}
            </Text>
            <Text>Contenido del modal dinámico</Text>
          </View>
        )}>
          <Ionicons name="ellipsis-vertical" size={26} color="#111" />
        </TouchableOpacity>
      </View>

      {/* 🔥 RENDERIZA LAS TABS DEBAJO DEL HEADER */}
      <BottomTabs />
    </>
  );
}
