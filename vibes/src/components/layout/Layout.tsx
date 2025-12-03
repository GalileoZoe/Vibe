// components/Layout/Layout.tsx
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { AuthStack } from "../../navigation/AuthStack";
import { RootNavigator } from "../../navigation/RootNavigator";

export const Layout = () => {
  const { authState } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {authState.isLoggedIn ? (
        <RootNavigator />
      ) : (
        <AuthStack />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
