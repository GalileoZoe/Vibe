import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { useNotificationsApi } from '../../../hooks/useNotificationsApi';
import { Card } from '../../components/Card';

export const Account: React.FC = () => {
  const { notifications, loading, error, fetchNotifications } = useNotificationsApi(); // ✅ añadimos fetchNotifications
  const [page, setPage] = useState(1);
  const [displayed, setDisplayed] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const ITEMS_PER_PAGE = 10;

  // Actualiza las notificaciones mostradas cuando cambian o se cambia de página
  useEffect(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setDisplayed(notifications.slice(0, end));
  }, [page, notifications]);

  const loadMore = () => {
    if (displayed.length < notifications.length) {
      setPage((prev) => prev + 1);
    }
  };

  // ✅ Refresca desde el backend como Messenger
  const handleRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await fetchNotifications(); // recarga página 1 desde la API
      setPage(1);
    } finally {
      setRefreshing(false);
    }
  }, [fetchNotifications]);

  if (loading && page === 1)
    return <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 50 }} />;

  if (error)
    return (
      <Text style={{ marginTop: 50, textAlign: 'center', color: 'red' }}>
        Error: {error}
      </Text>
    );

  if (!notifications.length)
    return (
      <Text style={{ marginTop: 50, textAlign: 'center' }}>
        No hay notificaciones.
      </Text>
    );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          marginVertical: 12,
          marginHorizontal: 16,
        }}
      >
        Notificaciones
      </Text>

      <FlatList
        data={displayed}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={`${item.message}\n${new Date(
              item.createdAt || Date.now()
            ).toLocaleString()}`}
          />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          displayed.length < notifications.length ? (
            <ActivityIndicator
              size="small"
              color="#007AFF"
              style={{ marginVertical: 16 }}
            />
          ) : null
        }
        // ✅ “Pull-to-refresh” como Messenger
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};
