import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { useApi } from '../../hooks/useApi';
import { Card } from '../components/Card';


interface Expense {
  _id: string;
  description: string;
  amount: number;
}

export const Home: React.FC = () => {
  const { data, loading, error } = useApi<Expense[]>('expenses');

  if (loading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Tus gastos</Text>
        {data?.map((exp) => (
          <Card key={exp._id} title={exp.description} description={`Monto: $${exp.amount}`} />
        ))}
      </View>
    </ScrollView>
  );
};

