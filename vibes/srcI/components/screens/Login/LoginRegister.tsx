import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import { useTheme } from '../../../context/ThemeContext';
import { useFeed } from '../../../context/FeedContext';
import { useSession } from '../../../context/Session';
import { useLoginRegister } from '../../../hooks/useLoginRegister';
import { styles } from '../../../styles/Styles';
import { AuthContext } from '../../../context/AuthContext';



export const LoginRegister: React.FC = () => {
  const { loading, state, handleRegister, handleInputChange, request } = useLoginRegister();
  const [photo, setPhoto] = useState<string | null>(null);
  const { feed, changeFeed } = useFeed();
  const { theme, changeTheme } = useTheme();
  const { session, changeSession } = useSession();
  const { authState, logout } = useContext(AuthContext);


  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.9,
      });

      if (!result.canceled) {
        const { uri } = result.assets[0];
        const base64Image = await convertImageToBase64(uri);
        setPhoto(base64Image); // Guardamos la imagen en base64
        handleInputChange('photo', base64Image); // Guarda en el estado
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Hubo un problema al seleccionar la imagen');
    }
  };

  const convertImageToBase64 = async (imageUri: string): Promise<string> => {
    try {
      const base64 = await FileSystem.readAsStringAsync(imageUri, {
        encoding: 'base64',
      });
      return base64;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      return '';
    }
  };

  const handleRegisterClick = async () => {
    // Validación de los campos
    if (!state.username || !state.email || !state.password || !state.email.includes('@') || !state.password) {
      Alert.alert('Campos incompletos', 'Por favor, ingresa un email y contraseña válidos.');
      return;
    }

    const registerData = {
      photo: photo || '', // Si no hay foto, envía una cadena vacía
      username: state.username,
      email: state.email,
      password: state.password,
      rol: 'Usuario',
      update:state.update
    };

    try {
      await handleRegister(registerData);
      Alert.alert('Éxito', 'Usuario registrado correctamente');
    } catch (error) {
      console.error('Error registrando el usuario:', error);
      Alert.alert('Error', 'Hubo un error al intentar registrar el usuario.');
    }
  };

  const handleRegisterAndNavigate = async () => {
    try {
      // Ejecuta la función de registro
      await handleRegisterClick();
      
      // Si el registro es exitoso, cambia de pantalla
      Alert.alert(
        "Usuario Registrado",
        "Ahora Puedes Iniciar Sesión",
        [
          {
            text: "Cancelar",
          },
          {
            text: "Aceptar",
            onPress: () => {
              logout();
              changeSession(0);
              changeFeed(1);
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <View style={styles.containerapp}>
    <TouchableOpacity onPress={() => changeFeed(1)}>
      <View style={theme === 0 ? styles.headermainred : styles.headermainblue}>
          <Text style={[styles.title]}>Crear Cuenta</Text>
      </View>
  </TouchableOpacity>
  <View style={theme==0?styles.container:styles.containerblue}>

  <TouchableOpacity onPress={pickImage}>
        {photo?
        <Image
          source={{ uri: `data:image/jpeg;base64,${photo}` }}
          style={{ width: 200, height: 200, borderRadius: 200, }}
        />:
        <FontAwesome name="user-circle" size={200} color="#ffffff" />
      }
  
  </TouchableOpacity>
      <Text style={styles.buttontext}>{state.username?state.username:'Foto'}</Text>
 <View style={styles.marginvertical}></View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={state.username}
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <View style={styles.marginVertical}></View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={state.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <View style={styles.marginVertical}></View>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={state.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <View style={styles.marginVertical}></View>

      {/* <TextInput
        style={styles.input}
        placeholder="Rol"
        value={state.rol}
        onChangeText={(text) => handleInputChange('rol', text)}
      /> */}

      
      <View style={styles.marginVertical}></View>

  

<View style={styles.marginVertical}></View>

      
        {/* <Text style={styles.buttontext}>
          <FontAwesome name="camera" size={20} color="#ffffff" />
        </Text> */}
      <View style={styles.marginVertical}></View>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <TouchableOpacity onPress={handleRegisterAndNavigate}>
        <Text style={styles.buttontext}>Registrarse</Text>
      </TouchableOpacity>
)}
    </View>
    <View style={styles.marginvertical}></View>
    </View>
  );
};