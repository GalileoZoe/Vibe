import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useLogin } from "../../../hooks/useLogin";
import { useTheme } from "../../../context/ThemeContext";
import { styles } from "../../../styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/routes";
import { AuthContext } from "../../../context/AuthContext";


type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export const Login: React.FC = () => {
  const { theme } = useTheme();
  const { loading, state, handleInputChange, handleLogin, request, error } = useLogin();
  const navigation = useNavigation<LoginScreenProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const { logout, authState } = useContext(AuthContext);

  console.log("Auth State in Login:", authState);

React.useEffect(() => {
  // Si ya está loggeado, navegamos automáticamente a MainTabs
  if (request) {
    setModalVisible(true);
    const timer = setTimeout(() => {
      setModalVisible(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    }, 1500);

    return () => clearTimeout(timer);
  }
}, [request]);

  return (
    <View style={theme === 0 ? styles.container : styles.containerblue}>
      <View style={styles.item}>
        <Text style={[styles.title, { marginTop: -60 }]}>VIBES</Text>
      </View>

      <Text style={styles.titlewhite}>Iniciar Sesión</Text>
      <Text style={styles.buttontext}>Inicia Sesión</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.inputblacklogin}
          value={state.email}
          onChangeText={(value) => handleInputChange("email", value)}
          placeholder="Correo Electrónico"
          placeholderTextColor={theme === 0 ? "black" : "white"}
          keyboardType="email-address"
          editable={!loading}
        />
        <Ionicons name="mail" size={20} color="white" style={{ marginRight: 280 }} />
        <Text style={[styles.buttontext, { bottom: 18, marginRight: 120 }]}>
          Correo Electrónico
        </Text>

        <TextInput
          style={styles.inputblacklogin}
          value={state.password}
          onChangeText={(value) => handleInputChange("password", value)}
          placeholder="Contraseña"
          placeholderTextColor={theme === 0 ? "black" : "white"}
          secureTextEntry
          editable={!loading}
        />
        <Ionicons name="key" size={20} color="white" style={{ marginRight: 280 }} />
        <Text style={[styles.buttontext, { bottom: 20, marginRight: 100 }]}>
          Recuperar Contraseña
        </Text>

        {loading ? (
          <ActivityIndicator style={styles.loading} size={50} color="white" />
        ) : (
          <View style={{ width: 600, alignContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.buttonwhite]}
           onPress={() => {
  handleLogin();
}}
              disabled={loading}
            >
              <Text style={theme === 0 ? styles.buttontextblack : styles.buttontextblue}>
                Iniciar Sesión
              </Text>
            </TouchableOpacity>

            <Text style={styles.buttontext}>o</Text>

            <TouchableOpacity
              style={[styles.buttonwhite]}
              onPress={() => navigation.navigate("Register" as never)}
            >
              <Text style={theme === 0 ? styles.buttontextblack : styles.buttontextblue}>
                Registrarme
              </Text>
            </TouchableOpacity>
            
          </View>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalAlert}>
            <Text style={styles.modalTitle}>
              {error ? "Error en Inicio de Sesión" : "Inicio de Sesión Exitoso"}
            </Text>
            <Text style={styles.modalMessage}>
              {error
                ? error
                : "Iniciando Sesión ..."}
            </Text>
            <View style={styles.filterRow}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
