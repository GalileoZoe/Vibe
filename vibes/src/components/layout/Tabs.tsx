import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { useDrawer } from './Drawer';
import { Chat } from '../screens/Chat/Chat';
import { Chats } from '../screens/Chat/Chats';
// import { ChatScreen } from '../screens/Chat/ChatScreen';
import { IA } from '../screens/IA/IA';
import { Notifications } from '../screens/Notifications/Notifications';
import { Settings } from '../screens/Settings/Settings';

const Tab = createBottomTabNavigator();

export const Tabs: React.FC = () => {
  const { theme } = useTheme();
  const { openDrawer } = useDrawer();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme === 0 ? 'black' : 'white',
          borderColor: 'transparent',
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#FFF',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          switch (route.name) {
            case 'Chat': iconName = 'chatbubble'; break;
            case 'Chats': iconName = 'chatbubbles'; break;
            case 'ChatScreen': iconName = 'person'; break;
            case 'IA': iconName = 'hardware-chip'; break;
            case 'Settings': iconName = 'settings'; break;
            case 'Notifications': iconName = 'notifications'; break;
          }
          return (
            <View style={{ alignItems: 'center' }}>
              <Ionicons name={iconName} size={size} color={color} />
              {focused && <View style={{ height: 2, width: 20, backgroundColor: 'white', marginTop: 2, borderRadius: 1 }} />}
            </View>
          );
        },
        headerRight: () => (
          <Ionicons
            name="menu"
            size={28}
            color={theme === 0 ? 'white' : 'black'}
            style={{ marginRight: 15 }}
            onPress={openDrawer}
          />
        ),
        headerStyle: { backgroundColor: theme === 0 ? 'black' : 'white' },
        headerTintColor: theme === 0 ? 'white' : 'black',
      })}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Chats" component={Chats} />
      {/* <Tab.Screen name="ChatScreen" component={ChatScreen} /> */}
      <Tab.Screen name="IA" component={IA} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
};
