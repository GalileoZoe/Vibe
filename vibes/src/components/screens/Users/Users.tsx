// src/components/screens/Users.tsx
import React from 'react';
import { Text, ScrollView, ActivityIndicator } from 'react-native';
import { Card } from '../components/Card';
import { useUsersApi } from '../../hooks/UseUsersApi';

export const Users: React.FC = () => {
  const { users, isLoading, loadUsers } = useUsersApi(); // Llamamos al hook

  if (isLoading) 
    return <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 50 }} />;

  if (!users.length) 
    return <Text style={{ marginTop: 50, textAlign: 'center' }}>No hay usuarios.</Text>;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12 }}>Usuarios</Text>
      {users.map((user) => (
        <Card
          key={user._id}
          title={user.name || "Sin nombre"} // Ajusta según la propiedad de tu User
          description={`Email: ${user.email || "N/A"}\nID: ${user._id}`}
        />
      ))}
    </ScrollView>
  );
};
