// navigation/BottomTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Chats } from "../components/screens/Chat/Chats";
import { Chat } from "../components/screens/Chat/Chat";
import { IA } from "../components/screens/IA/IA";
import { Notifications } from "../components/screens/Notifications/Notifications";

import { Tabs } from "../components/layout/Tabs/Tabs";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // EL STACK MANEJA EL HEADER
      }}
      tabBar={(props) => <Tabs {...props} />}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="IA" component={IA} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
