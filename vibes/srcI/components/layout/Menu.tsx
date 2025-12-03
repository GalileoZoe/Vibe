import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';

export const Menu = ({ navigation }: DrawerContentComponentProps) => {
  const screens = [
    { name: 'HomeTabs', label: 'Inicio' },
    { name: 'Profile', label: 'Perfil' },
    { name: 'Settings', label: 'Configuración' },
  ];

  return (
    <DrawerContentScrollView>
      <View style={{ padding: 20 }}>
        {screens.map((screen) => (
          <TouchableOpacity
            key={screen.name}
            style={{ marginVertical: 10 }}
            onPress={() => navigation.navigate(screen.name)}
          >
            <Text style={{ fontSize: 18 }}>{screen.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};
