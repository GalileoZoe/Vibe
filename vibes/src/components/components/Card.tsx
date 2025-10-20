import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    {description && <Text style={styles.description}>{description}</Text>}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { color: '#555', marginTop: 4 },
});

