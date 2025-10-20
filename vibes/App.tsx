import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Settings } from './src/components/screens/Settings';
import { Chat } from './src/components/screens/Chat';
import { Notifications } from './src/components/screens/Notifications';
import { Profile } from './src/components/screens/Profile';
import { Drawer } from './src/components/layout/DrawerMenu';
import { Tabs } from './src/components/layout/Tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tabs/>
    </NavigationContainer>
  );
}
