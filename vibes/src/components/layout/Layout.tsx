import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from './Drawer';

const Layout: React.FC = () => (
  <NavigationContainer>
    <Drawer />
  </NavigationContainer>
);

export default Layout;
