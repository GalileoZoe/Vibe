import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useApi } from '../../hooks/useApi';
import { Card } from '../components/Card';
import { Item } from '../components/Item';
import { Button } from '../components/Button';

interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

export const Profile: React.FC = () => {
  const { data, loading, error } = useApi<User>('users/profile');

  if (loading) return <Text>Cargando perfil...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card title="Perfil del Usuario">
        <Item label="Nombre" value={data?.name ?? ''} />
        <Item label="Correo" value={data?.email ?? ''} />
        <Item label="Miembro desde" value={new Date(data?.createdAt ?? '').toLocaleDateString()} />
      </Card>
      <Button label="Editar perfil" onPress={() => console.log('Editar perfil')} />
    </ScrollView>
  );
};

