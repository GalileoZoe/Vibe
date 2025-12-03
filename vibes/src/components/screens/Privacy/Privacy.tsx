import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { useNotificationsApi } from '../../../hooks/useNotificationsApi';
import { Card } from '../../components/Card';
import { styles } from '../../../styles/Styles';

export const Privacy: React.FC = () => {
  const { notifications, loading, error, fetchNotifications } = useNotificationsApi(); // ✅ añadimos fetchNotifications
  const [page, setPage] = useState(1);
  const [displayed, setDisplayed] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const ITEMS_PER_PAGE = 10;


  return (
    <View style={styles.container}>
      <Text
        style={styles.title}>
        Privacy
      </Text>

    </View>
  );
};
