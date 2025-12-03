// src/components/mobile/LoginRegister.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLogin } from "../../../hooks/useLogin";
import { styles } from "../../../styles/Styles";

export const Register: React.FC = () => {
  const { loading, state, handleInputChange, registerLogin, request, error } =
    useLogin();

  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [codeInput, setCodeInput] = useState("");
  const [codeExpires, setCodeExpires] = useState<number | null>(null);
  const [sending, setSending] = useState(false);

  const generateCode = async () => {
    if (!state.email) return Alert.alert("Error", "Escribe un correo antes de generar el código");

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    setCodeExpires(Date.now() + 10 * 60 * 1000); // 10 minutos

    // Aquí podrías usar EmailJS o tu API para enviar el código
    Alert.alert("Código generado", `Tu código es: ${code}`);
  };

  const canRegister = () => {
    if (!generatedCode) return false;
    if (Date.now() > (codeExpires ?? 0)) return false;
    return codeInput === generatedCode;
  };

  const handleRegister = () => {
    if (!canRegister()) return Alert.alert("Error", "Código incorrecto o expirado.");
    registerLogin();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={require("../../../assets/vibe.png")}
          style={{ width: 120, height: 120, marginBottom: 8 }}
          resizeMode="contain"
        />
        <Text style={styles.buttontext}>Crear Cuenta</Text>
      </View>

      <Text style={styles.titlewhite}>Crear Cuenta</Text>

      {error && <Text style={[styles.texts, { color: "red" }]}>{error}</Text>}
      {request && <Text style={[styles.texts, { color: "#0f0" }]}>¡Usuario registrado correctamente!</Text>}

      <TextInput
        style={styles.inputblacklogin}
        placeholder="Nombre de Usuario"
        value={state.username || ""}
        onChangeText={(value) => handleInputChange("username", value)}
        editable={!loading}
      />
      <TextInput
        style={styles.inputblacklogin}
        placeholder="Correo Electrónico"
        value={state.email || ""}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
        editable={!loading}
      />
      <TouchableOpacity
        style={[styles.buttonwhite, { opacity: sending ? 0.6 : 1, marginVertical: 10 }]}
        onPress={generateCode}
        disabled={sending}
      >
        <Text style={styles.buttontextblack}>{sending ? "Enviando..." : "Enviar Código"}</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.inputblacklogin}
        placeholder="Código de verificación"
        value={codeInput}
        onChangeText={setCodeInput}
        editable={!!generatedCode}
      />
      {generatedCode && Date.now() > (codeExpires ?? 0) && (
        <Text style={{ color: "red", marginBottom: 8 }}>El código expiró, genera uno nuevo.</Text>
      )}

      <TextInput
        style={styles.inputblacklogin}
        placeholder="Contraseña"
        value={state.password || ""}
        secureTextEntry
        onChangeText={(value) => handleInputChange("password", value)}
        editable={!loading}
      />
      <TextInput
        style={styles.inputblacklogin}
        placeholder="Rol (opcional)"
        value={state.rol || "Usuario"}
        onChangeText={(value) => handleInputChange("rol", value)}
        editable={!loading}
      />

      <TouchableOpacity
        style={[styles.buttonwhite, { opacity: loading || !canRegister() ? 0.6 : 1, marginTop: 15 }]}
        onPress={handleRegister}
        disabled={loading || !canRegister()}
      >
        {loading ? (
          <ActivityIndicator color="black" />
        ) : (
          <Text style={styles.buttontextblack}>Crear Cuenta</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};
