import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mi App</Text>
      </View>

      <DrawerItem
        label="Chats"
        icon={() => <Ionicons name="chatbubble-outline" size={22} color="black" />}
        onPress={() => navigation.navigate('Chats')}
      />
      <DrawerItem
        label="Configuración"
        icon={() => <Ionicons name="settings-outline" size={22} color="black" />}
        onPress={() => navigation.navigate('Settings')}
      />
      <DrawerItem
        label="Perfil"
        icon={() => <Ionicons name="person-circle-outline" size={22} color="black" />}
        onPress={() =>
          navigation.navigate('Profile', { username: 'John', lastname: 'Doe' })
        }
      />
      <DrawerItem
        label="Cuenta"
        icon={() => <Ionicons name="lock-closed-outline" size={22} color="black" />}
        onPress={() =>
          navigation.navigate('Account', { username: 'John', lastname: 'Doe' })
        }
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'violet',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
