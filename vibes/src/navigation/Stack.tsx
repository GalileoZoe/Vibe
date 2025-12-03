import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Screens
import { Profile } from '../components/screens/Profile/Profile';
import { Chat } from '../components/screens/Chat/Chat';
import { Chats } from '../components/screens/Chat/Chats';
import { IA } from '../components/screens/IA/IA';
import { Settings } from '../components/screens/Settings/Settings';
import { Notifications } from '../components/screens/Notifications/Notifications';
import { Home } from '../components/screens/Home/Home';
import { Privacy } from '../components/screens/Privacy/Privacy';

// Modal Context
import { useModal } from '../context/ModalContext';


const Stack = createNativeStackNavigator();

// 🧠 Mapa de iconos por pantalla
const headerIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  Chats: "chatbubble-ellipses-outline",
  Chat: "chatbubble-ellipses-outline",
  IA: "sparkles-outline",
  Settings: "settings-outline",
  Notifications: "notifications-outline",
  Home: "home-outline",
  Privacy: "finger-print-outline",
  Profile: "person-circle-outline",
  Login: "person-circle-outline",
  Register: "person-circle-outline",
};

export const RootStack = () => {
  const { showModal } = useModal(); // usamos nuestro modal global

  return (
    <Stack.Navigator
      initialRouteName="Chats"
      screenOptions={({ route }) => {
        const iconName =
          headerIcons[route.name] !== undefined
            ? headerIcons[route.name]
            : "ellipse"; // fallback

        return {
          headerStyle: { backgroundColor: '#fafafa' },
          headerTitleAlign: 'left',

          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Ionicons name={iconName} size={22} color="#333" />
              <Text style={{ fontSize: 20, fontWeight: '700', color: '#333' }}>
                {route.name}
              </Text>
            </View>
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                showModal(
                  <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                      Opciones de {route.name}
                    </Text>
                    <Text>¡Aquí va tu contenido del modal!</Text>
                  </View>
                )
              }
              style={{ marginRight: 10 }}
            >
              <Ionicons name="ellipsis-vertical" size={26} color="#111" />
            </TouchableOpacity>
          ),
        };
      }}
    >
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="IA" component={IA} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
};
