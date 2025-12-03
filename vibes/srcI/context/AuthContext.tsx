import React, { createContext, useReducer, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input } from "../hooks/useFormHookContext";
import { AuthReducer } from "./AuthReducer";

export interface AuthState {
    isLoggedIn: boolean;
    _id: string | undefined;
    favoriteImage?: string | undefined;
    username?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    rol?: string | undefined;
    formData: Input[];
}

export const AuthInicialState: AuthState = {
    isLoggedIn: false,
    _id: undefined,
    favoriteImage: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    rol: undefined,
    formData: [],
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeId: (Id: string) => void;
    changeFavImage: (sourceImage: string) => void;
    changeUserName: (userName: string) => void;
    changeEmail: (Email: string) => void;
    changeRol: (Rol: string) => void;
    logout: () => void;
    formData: (data: Input[]) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, dispatch] = useReducer(AuthReducer, AuthInicialState);

    // Cargar estado desde AsyncStorage al iniciar
    useEffect(() => {
        const loadState = async () => {
            const savedState = await AsyncStorage.getItem("authState");
            if (savedState) {
                dispatch({ type: "loadState", payload: JSON.parse(savedState) });
            }
        };
        loadState();
    }, []);

    // Guardar estado en AsyncStorage cada vez que cambie
    useEffect(() => {
        AsyncStorage.setItem("authState", JSON.stringify(authState));
    }, [authState]);

    const signIn = () => dispatch({ type: 'signIn' });
    const changeId = (Id: string) => dispatch({ type: "changeId", payload: Id });
    const changeFavImage = (sourceImage: string) => dispatch({ type: "changeFavImage", payload: sourceImage });
    const changeUserName = (userName: string) => dispatch({ type: "changeUserName", payload: userName });
    const changeEmail = (Email: string) => dispatch({ type: 'changeEmail', payload: Email });
    const changeRol = (Rol: string) => dispatch({ type: 'changeRol', payload: Rol });
    const formData = (data: Input[]) => dispatch({ type: 'setFormData', payload: data });
    const logout = () => dispatch({ type: "logout" });

    return (
        <AuthContext.Provider value={{ authState, signIn, changeId, changeFavImage, changeUserName, changeEmail, changeRol, formData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};