import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/routes';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Profile: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>

      {/* Avatar circular */}
      {/* <Image
        source={require('../../../assets/galileozoe-01.png')}
        style={styles.avatar}
      /> */}

                    <Ionicons
          name="person-circle-sharp"
          size={200}
          color="#111"
          style={{ alignSelf: "center", marginBottom: 20 }}
        />
        

      {/* Botón editar */}
      <TouchableOpacity>
        <Text style={styles.editText}>Editar</Text>
      </TouchableOpacity>

      {/* SECCIONES */}
      {/* Nombre */}
      <View style={styles.section}>
        <View style={styles.iconBox}>
          <Ionicons name="person-outline" size={24} color="#000" />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Nombre</Text>
          <Text style={styles.sectionValue}>Zoe</Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.section}>
        <View style={styles.iconBox}>
          <Ionicons name="information-circle-outline" size={24} color="#000" />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Info.</Text>
          <Text style={styles.sectionValue}>Ser guapo tiene sus riesgos</Text>
        </View>
      </View>

      {/* Teléfono */}
      <View style={styles.section}>
        <View style={styles.iconBox}>
          <Ionicons name="call-outline" size={24} color="#000" />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Teléfono</Text>
          <Text style={styles.sectionValue}>+52 722 499 5219</Text>
        </View>
      </View>

      {/* Enlaces */}
      <View style={styles.section}>
        <View style={styles.iconBox}>
          <Ionicons name="link-outline" size={24} color="#000" />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Enlaces</Text>

          <TouchableOpacity>
            <Text style={styles.link}>Añadir enlaces</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa", // estilo WhatsApp dark
    alignItems: "center",
    paddingTop: 40,
  },

  avatar: {
    width: 180,
    height: 180,
    borderRadius: 180,
    marginBottom: 10,
  },

  editText: {
    color: "#000",
    fontSize: 16,
    marginBottom: 40,
  },

  section: {
    width: "88%",
    flexDirection: "row",
    marginBottom: 35,
  },

  iconBox: {
    width: 40,
    alignItems: "center",
  },

  sectionTitle: {
    color: "#000",
    fontSize: 15,
    marginBottom: 4,
  },

  sectionValue: {
    color: "#777",
    fontSize: 16,
  },

  link: {
    color: "#000",
    fontSize: 16,
    marginTop: 3,
  },
});
