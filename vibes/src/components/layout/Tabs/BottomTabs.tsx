import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../context/ThemeContext';
import { useDrawer } from '../Drawer';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/routes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type BottomTabsNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const BottomTabs = () => {
  const { theme } = useTheme();
  const { openDrawer, visible, closeDrawer } = useDrawer();
  const navigation = useNavigation<BottomTabsNavigationProp>();
  
  const [activeScreen, setActiveScreen] = useState<keyof RootStackParamList | null>(null);

  // Función para manejar navegación + cierre de drawer + actualizar pantalla activa
  const handleNavigate = (screen: keyof RootStackParamList) => {
    if (visible) closeDrawer();
    setActiveScreen(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#ffffff' }]}>

      
      <TouchableOpacity style={styles.tabButton} onPress={() => handleNavigate('Chats')}>
        <Ionicons
          name={activeScreen === 'Chats' ? 'chatbubble' : 'chatbubble-outline'}
          size={28}
          color="#111"
        />
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.tabButton} onPress={() => handleNavigate('Chat')}>
        <Ionicons
          name={activeScreen === 'Chat' ? 'chatbubbles' : 'chatbubbles-outline'}
          size={28}
          color="#111"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabButton, { backgroundColor:'#111', borderRadius:50 }]}
        onPress={() => handleNavigate('IA')}
      >
        <Ionicons
          name="hardware-chip-outline"
          size={28}
          color="#fafafa"
        />
        {/* <Text style={{color:'#fafafa'}}>IA</Text> */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton} onPress={() => handleNavigate('Notifications')}>
        <Ionicons
          name={activeScreen === 'Notifications' ? 'notifications' : 'notifications-outline'}
          size={28}
          color="#111"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton} onPress={visible ? closeDrawer : openDrawer}>
        <Ionicons name="menu" size={28} color="#111" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
    zIndex: 999,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    backgroundColor: '#fff',
  },
  tabButton: {
    flex: 1,
    height: 44,
    marginHorizontal: 6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
