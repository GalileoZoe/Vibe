// src/context/AuthContext.tsx
import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthReducer } from './AuthReducer';
import { Input } from '../hooks/useFormHookContext';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteImage?: string;
    rol?: string;
    email?: string;
    formData: Input[];
}

export const AuthInicialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteImage: undefined,
    rol: undefined,
    email: undefined,
    formData: [],
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: (rol?: string, email?: string) => void;
    changeUserName: (userName: string) => void;
    logout: () => void;
    changeFavImage: (sourceImage: string) => void;
    setFormData: (data: Input[]) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, dispatch] = useReducer(AuthReducer, AuthInicialState);

    // Cargar estado al iniciar
    useEffect(() => {
        const loadStorage = async () => {
            try {
                const stored = await AsyncStorage.getItem('authState');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    dispatch({ type: 'restore', payload: parsed });
                }
            } catch (e) {
                console.log("Error cargando authState", e);
            }
        };

        loadStorage();
    }, []);

    // Guardar cambios
    useEffect(() => {
        AsyncStorage.setItem('authState', JSON.stringify(authState));
    }, [authState]);

    const signIn = (rol?: string, email?: string) => {
        dispatch({ type: 'signIn', payload: { rol, email } });
    };

    const logout = async () => {
        await AsyncStorage.removeItem('authState');
        dispatch({ type: 'logout' });
    };

    const changeFavImage = (sourceImage: string) =>
        dispatch({ type: 'changeFavImage', payload: sourceImage });

    const changeUserName = (userName: string) =>
        dispatch({ type: 'changeUserName', payload: userName });

    const setFormData = (data: Input[]) =>
        dispatch({ type: 'setFormData', payload: data });

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                changeUserName,
                logout,
                changeFavImage,
                setFormData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
