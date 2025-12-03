import React, { createContext, useContext, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Pressable,
  Image,
  BackHandler,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useTheme } from "../../context/ThemeContext";
import { RootStackParamList } from "../../routes/routes";
import { useModal } from '../../context/ModalContext';
import { AuthContext } from "../../context/AuthContext";


const SCREEN_WIDTH = Dimensions.get("window").width;

interface DrawerContextType {
  openDrawer: () => void;
  closeDrawer: () => void;
  navigateTo: (screen: keyof RootStackParamList) => void;
  visible: boolean;
}

const DrawerContext = createContext<DrawerContextType | null>(null);
export const useDrawer = () => {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer debe usarse dentro de <DrawerProvider>");
  return ctx;
};

interface Props {
  children: React.ReactNode;
}

const DrawerItem = ({
  iconName,
  label,
  screen,
  onPress,
}: {
  iconName: string;
  label: string;
  screen?: keyof RootStackParamList; // 🔹 opcional ahora
  onPress?: () => void;
}) => {
  const { navigateTo } = useDrawer();

  const handlePress = () => {
    if (screen) {
      navigateTo(screen); // navega solo si existe screen
    } else if (onPress) {
      onPress(); // ejecuta onPress si se pasa
    }
  };

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", marginBottom: 20 }}
      onPress={handlePress}
    >
      <Ionicons
        name={iconName as any}
        size={24}
        color="#111"
        style={{ marginRight: 12 }}
      />
      <Text style={{ fontSize: 18, color: "#111" }}>{label}</Text>
    </TouchableOpacity>
  );
};



export const DrawerProvider: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const drawerAnim = useRef(new Animated.Value(-SCREEN_WIDTH * 0.8)).current;
  const [visible, setVisible] = useState(false);
  const { showModal } = useModal();
  const { logout, authState } = useContext(AuthContext);
  



  const openDrawer = () => {
    setVisible(true);
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnim, {
      toValue: -SCREEN_WIDTH * 0.8,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  const navigateTo = (screen: keyof RootStackParamList) => {
    closeDrawer();
    navigation.navigate(screen);
  };

  

  return (
    <DrawerContext.Provider
      value={{ openDrawer, closeDrawer, navigateTo, visible }}
    >
      {children}

      {visible && (
        <Pressable
          onPress={closeDrawer}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.45)",
          }}
        />
      )}

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: SCREEN_WIDTH * 0.8,
          transform: [{ translateX: drawerAnim }],
          backgroundColor: theme === 1 ? "#000" : "#fafafa",
          paddingTop: 80,
          paddingHorizontal: 20,
        }}
      >
{authState.isLoggedIn?
        <>

        <TouchableOpacity
        onPress={visible?closeDrawer:openDrawer}
        >
        <View  style={{backgroundColor:'#fafafa', width:40, height:40, top:300, zIndex:999, left:250, borderRadius:30}}>
             <Ionicons
        onPress={visible?closeDrawer:openDrawer}
      
          name={visible?"arrow-back-circle-outline":"arrow-forward-circle-outline"}
          size={30}
          color="#111"
          style={{ alignSelf: "center", marginTop: 5 }}
        />
        </View>
        </TouchableOpacity>
        <Text
          style={{
            color: theme === 1 ? "white" : "black",
            fontSize: 22,
            fontWeight: "700",
            marginBottom: 20,
          }}
        >
          Vibe
        </Text>
        <Ionicons
          name="person-circle-sharp"
          size={100}
          color="#111"
          style={{ alignSelf: "center", marginBottom: 20 }}
        />
        <Text>{authState.username}</Text>
        <DrawerItem iconName="person" label="Perfil" screen="Profile" />
        <DrawerItem iconName="lock-closed" label="Cuenta" screen="Account" />
        <DrawerItem
          iconName="finger-print"
          label="Privacidad"
          screen="Privacy"
        />
        <DrawerItem
          iconName="settings-outline"
          label="Configuración"
          screen="Settings"
        />
        <DrawerItem
          iconName="notifications"
          label="Notificaciones"
          screen="Notifications"
        />
        <DrawerItem iconName="settings" label="Ajustes" screen="Settings" />

<DrawerItem
  iconName="log-out-outline"
  label="Cerrar Sesión"
  // screen="Settings"
  onPress={() =>
    showModal(
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          ¿Salir de la cuenta?
        </Text>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#111',
            borderRadius: 8,
            marginTop: 10
          }}
          onPress={logout}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    )
  }
/>

</>

:

<DrawerItem
  iconName="arrow-forward-circle-outline"
  label="Salir"
  // screen="Settings"
  onPress={() =>
    showModal(
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          ¿Desea salir de la aplicación?
        </Text>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#111',
            borderRadius: 8,
            marginTop: 10
          }}
     onPress={() => BackHandler.exitApp()}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    )
  }
/>
}

        <View style={{ position: "absolute", bottom: 40, left: 20, right: 20 }}>

        <Text style={{ top: 100, fontWeight: 700 }}>By:</Text>
        <Image
          source={require("../../assets/galileozoe-01.png")} // <-- ruta relativa desde el archivo TSX
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginTop: 40,
          }}
          resizeMode="contain"
        />

        </View>
      </Animated.View>
    </DrawerContext.Provider>
  );
};
