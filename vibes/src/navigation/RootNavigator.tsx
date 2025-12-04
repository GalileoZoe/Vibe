// navigation/RootNavigator.tsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthStack } from "./AuthStack";
import { AppNavigator } from "./AppNavigator";

export function RootNavigator() {
  const { authState } = useContext(AuthContext);

  return authState.isLoggedIn ? <AppNavigator /> : <AuthStack />;
}
