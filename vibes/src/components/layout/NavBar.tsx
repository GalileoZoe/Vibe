import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Chat } from '../screens/Chat/Chat';
import { Settings } from '../screens/Settings/Settings';
import { Profile } from '../screens/Profile/Profile';
import { Notifications } from '../screens/Notifications/Notifications';

const Drawer = createBottomTabNavigator();

export const SideBar: React.FC = () => (

      <Drawer.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: '#ffffffff', borderTopWidth: 0 },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#f2f2f2',
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            switch (route.name) {
              case 'Notifications':
                iconName = 'notifications';
                break;
              case 'Chat':
                iconName = 'chatbubble-ellipses';
                break;
              case 'Profile':
                iconName = 'person';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
);

