import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
  value: string | number;
}

export const Item: React.FC<Props> = ({ label, value }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  label: { fontWeight: '600', color: '#333' },
  value: { color: '#666' },
});

