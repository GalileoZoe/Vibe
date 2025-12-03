// src/components/TouchID.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTouchID } from "../../../context/TouchIDContext";
import { useModal } from "../../../context/ModalContext";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export const TouchID: React.FC = () => {
  const { showModal, hideModal } = useModal();
  const { logout, authState } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Ionicons name="finger-print-outline" size={90} color="#555" />

      <Text style={styles.title}>Autenticación requerida</Text>
      <Text style={styles.subtitle}>Huella Digital</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Desbloquear</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ccc", marginTop: 12 }]}
      >
        <Text style={[styles.buttonText, { color: "#111" }]}>Usar PIN</Text>
      </TouchableOpacity>

      <Ionicons
        name="scan-circle-outline"
        size={40}
        color="#555"
        style={{ marginTop: 50 }}
      />
      <Text style={styles.subtitle}>Usar FaceID</Text>


      <TouchableOpacity
        onPress={() =>
          showModal(
            <View style={{ padding: 20, alignItems: "center" }}>
              <Text style={{ fontSize: 18, marginBottom: 20 }}>
                Huella Digital
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 20 }}>
                Haz registrado una Huella Digital para iniciar sesión en vibe
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 20 }}>
                Úsala para acceder a la aplicación
              </Text>

              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  // logout();   // <<-- logout REAL del AuthContext
                  hideModal();
                }}
              >
                <Text style={styles.modalButtonText}>Desbloquear</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                onPress={hideModal}
              >
                <Text style={[styles.modalButtonText, { color: "#111" }]}>
                  Cancelar
                </Text>
              </TouchableOpacity> */}
            </View>
          )
        }
      >
        <Ionicons
          name="help-circle-outline"
          size={30}
          style={{ marginTop: 50 }}
          color="#555"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: "700", marginTop: 16 },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    marginTop: 8,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: "#111",
    borderRadius: 12,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  modalButton: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#111",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
