import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useNotificationsApi } from '../../hooks/useNotificationsApi';
import { Card } from '../components/Card';

export const Notifications: React.FC = () => {
  const { notifications, loading, error } = useNotificationsApi(); // Aquí llamamos al hook correctamente

  if (loading) return <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 50 }} />;
  if (error) return <Text style={{ marginTop: 50, textAlign: 'center', color: 'red' }}>Error: {error}</Text>;
  if (!notifications.length) return <Text style={{ marginTop: 50, textAlign: 'center' }}>No hay notificaciones.</Text>;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12 }}>Notificaciones</Text>
      {notifications.map((notification) => (
        <Card
          key={notification._id}
          title={notification.title}
          description={`${notification.message}\n${new Date(notification.createdAt || Date.now()).toLocaleString()}`}
        />
      ))}
    </ScrollView>
  );
};
