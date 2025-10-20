import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Chat } from '../screens/Chat';
import { Settings } from '../screens/Settings';
import { Notifications } from '../screens/Notifications';
import { Profile } from '../screens/Profile';
import { Drawer } from './Drawer';
import { Users } from '../screens/Users';

const Tab = createBottomTabNavigator();

export const Tabs: React.FC = () => (

      <Tab.Navigator
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
              case 'Users':
                iconName = 'person';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
              case 'Drawer':
                iconName = 'code';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Users" component={Users} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Drawer" component={Drawer} />
      </Tab.Navigator>
);

