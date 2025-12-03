import React, { useReducer, useState, useContext } from 'react';
import { vibeApi } from '../api/vibeApi';
import { LoginResponse } from '../interfaces/Login';
import { AuthContext } from '../context/AuthContext';

const initialLoginData = { _id:'', photo:'', username:'', email:'', password:'', rol:'', update:'' };

type Action = { 
    type: 'handleInputChange', 
    payload: { fieldName: keyof LoginResponse, value: string } 
};

const dataReducer = (state: LoginResponse, action: Action): LoginResponse => {
    switch (action.type) {
        case 'handleInputChange':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value,
            };
        default:
            return state;
    }
};

export const useLoginRegister = () => {
    const { signIn, changeUserName, changeFavImage, changeId, changeEmail } = useContext(AuthContext);
    const [state, dispatch] = useReducer(dataReducer, initialLoginData);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [request, setRequest] = useState<LoginResponse | null>(null);

    // Función para manejar el cambio de input
    const handleInputChange = (fieldName: keyof LoginResponse, value: string) => {
        dispatch({ type: 'handleInputChange', payload: { fieldName, value } });
    };

    // Función para registrar al usuario
    const handleRegister = async (registerData: LoginResponse) => {
        setLoading(true);
        setError(null); // Reiniciar error al intentar registro

        try {
            // Enviar petición de registro a la API
            const response = await vibeApi.post<LoginResponse>('http://localhost:3000/api/v1/vibes/login/register', registerData);

            if (response.data) {
                console.log("Usuario registrado:", response.data);
                // Si la respuesta es exitosa, se realiza el inicio de sesión
                signIn();
                changeId(response.data._id);
                changeEmail(response.data.email);
                changeUserName(response.data.username);
                changeFavImage(response.data.photo);
                setRequest(response.data);  // Establecer el usuario registrado
            } else {
                console.error("Registro fallido: Datos vacíos.");
                setRequest(null);
            }
        } catch (err) {
            console.error("Error registrando el usuario:", err);
            // Mostrar el error
            setError("Hubo un error al registrar el usuario. Por favor, intenta de nuevo.");
            setRequest(null);
        } finally {
            setLoading(false);
        }
    };

    // Función para actualizar los datos del usuario
    const handleUpdate = async (updateData: LoginResponse) => {
        setLoading(true);
        setError(null); // Reiniciar error al intentar actualización

        try {
            // Realizamos la petición PUT para actualizar el perfil
            const response = await vibeApi.put<LoginResponse>(`http://localhost:3000/api/v1/vibes/login/update/${state._id}`, updateData);

            if (response.data) {
                console.log("Usuario actualizado:", response.data);
                   changeId(response.data._id);
                changeEmail(response.data.email);
                changeUserName(response.data.username);
                changeFavImage(response.data.photo);
                setRequest(response.data);  // Establecer los datos del usuario actualizado
            } else {
                console.error("Actualización fallida: Datos vacíos.");
                setRequest(null);
            }
        } catch (err) {
            console.error("Error actualizando el usuario:", err);
            // Mostrar el error
            setError("Hubo un error al actualizar el usuario. Por favor, intenta de nuevo.");
            setRequest(null);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        state,
        error,
        handleRegister,
        handleInputChange,
        handleUpdate,
        request,
    };
};