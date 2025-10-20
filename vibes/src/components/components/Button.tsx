import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  label?: string;
  onPress: () => void;
  color?: string;
}

export const Button: React.FC<Props> = ({ label, onPress, color = '#007AFF' }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 6,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});

