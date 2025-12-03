// navigation/RootNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";

import { Profile } from "../components/screens/Profile/Profile";
import { Settings } from "../components/screens/Settings/Settings";
import { Login } from "../components/screens/Login/Login";
import { Register } from "../components/screens/Login/LoginRegister";

type RootParamList = {
  MainTabs: undefined;
  Profile: undefined;
  Settings: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 👇 Aquí vive TODO el app con Tabs e interiores */}
      <Stack.Screen name="MainTabs" component={TabNavigator} />

      {/* Rutas internas accesibles desde tabs */}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />

      {/* Si quieres poder navegar a login/register dentro del app */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
