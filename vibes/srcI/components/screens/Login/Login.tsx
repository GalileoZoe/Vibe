import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { useLogin } from '../../../hooks/useLogin';
import { useTheme } from '../../../context/ThemeContext';
import { useFeed } from '../../../context/FeedContext';
import { styles } from '../../../styles/Styles';

export const Login: React.FC = () => {
    const { theme } = useTheme();
    const { changeFeed } = useFeed();
    const { loading, state, handleInputChange, handleLogin, request } = useLogin();

    const [modalVisible, setModalVisible] = useState(false);

    // Controla el modal basado en el estado de carga
    React.useEffect(() => {
        if (loading) {
            setModalVisible(true);
        } else {
            setModalVisible(false);
        }
    }, [loading]);

    return (
        <View style={theme === 0 ? styles.container : styles.containerblue}>
            <View></View>
            <View style={styles.item}>
                <Text style={[styles.title, { marginTop: -60 }]}>ZORO</Text>
            </View>

            <Text style={styles.buttontext}>Iniciar Sesión</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.inputredlogin}
                    value={state.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    placeholder="Correo Electrónico"
                    placeholderTextColor={theme === 0 ? '#cf111f' : '#3b82f6'}
                    keyboardType="email-address"
                    editable={!loading}
                />

                <TextInput
                    style={styles.inputredlogin}
                    value={state.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                    placeholder="Contraseña"
                    placeholderTextColor={theme === 0 ? '#cf111f' : '#3b82f6'}
                    secureTextEntry
                    editable={!loading}
                />

                {loading ? (
                    <ActivityIndicator style={styles.loading} size={50} color="white" />
                ) : (
                    <View style={{ width: 600, alignContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[styles.buttonwhite, { marginVertical: 40 }]}
                            onPress={handleLogin}
                            disabled={loading}
                        >
                            <Text style={theme === 0 ? styles.buttontextred : styles.buttontextblue}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonwhite, { marginVertical: 60 }]}
                            onPress={() => changeFeed(27)}
                        >
                            <Text style={theme === 0 ? styles.buttontextred : styles.buttontextblue}>Registrarme</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>


            {!request? (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalAlert}>

                                <Text style={styles.modalTitle}>Inicio de Sesión Exitoso</Text>
                                <Text style={styles.modalMessage}>
                                    Iniciando Sesión ...
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
                </>):(
<>
<Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalAlert}>

                                <Text style={styles.modalTitle}>Contraseña Incorrecta</Text>
                                <Text style={styles.modalMessage}>
                                    Contraseña incorrecta o datos faltantes.{'\n'} Revisa tu información e intenta nuevamente.
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
</>
            )}
        </View>
    );
};