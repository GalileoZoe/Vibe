import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }, // tu estilo global
});
