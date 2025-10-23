import { useReducer, useState, useContext } from 'react';
import { vibeApi } from '../api/vibeApi';
import { AuthContext } from '../context/AuthContext';
import { LoginResponse } from '../interfaces/Login';



const initialLoginData = { _id:'', photo:'', username:'', email:'', password:'', rol:'', update:'' };


type Action = { type: 'handleInputChange', payload: { fieldName: keyof LoginResponse, value: string } };

const dataReducer = (state: LoginResponse, action: Action) => {
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

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [request, setRequest] = useState<boolean | null>(null); // Maneja el estado de la petición
    const [state, dispatch] = useReducer(dataReducer, initialLoginData);
    const { signIn, changeId, changeUserName, changeFavImage, changeEmail, changeRol } = useContext(AuthContext);

    const handleInputChange = (fieldName: keyof LoginResponse, value: string) => {
        dispatch({ type: 'handleInputChange', payload: { fieldName, value } });
    };

    const handleLogin = async () => {
        setLoading(true);
        setRequest(null); // Reinicia el estado de la petición
        const apiUrl = 'http://articulosmxapi.com:3000/api/zoro/v1/login/';

        const dataBody = {
            email: state.email,
            password: state.password,
        };

        try {
            const response = await vibeApi.post<LoginResponse>(apiUrl, dataBody);

            if (response.data?._id) {
                setRequest(false); // Indica que la petición fue exitosa
                signIn();
                changeId(response.data._id);
                changeUserName(response.data.username);
                changeFavImage(response.data.photo);
                changeEmail(response.data.email);
                changeRol(response.data.rol);
            } else {
                setRequest(true); // Indica que la petición falló
            }
        } catch (error) {
            console.error('Error en la autenticación:', error);
            setRequest(true); // Indica que hubo un error
        } finally {
            setLoading(false);
        }
    };

    // Nueva función para actualizar perfil
    const handleUpdateProfile = async (userId: string) => {
        setLoading(true);
        setRequest(null); // Reinicia el estado de la petición
        const apiUrl = `http://articulosmxapi.com:3000/api/zoro/v1/login/update/${userId}`;

        try {
            const response = await vibeApi.post(apiUrl, state);

            if (response.status === 201) {
                setRequest(false); // Indica que la petición fue exitosa
                changeId(response.data._id);
                changeUserName(response.data.username);
                changeFavImage(response.data.photo);
                changeEmail(response.data.email);
            } else {
                setRequest(false); // Indica que la petición falló
            }
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            setRequest(false); // Indica que hubo un error
        } finally {
            setLoading(false);
        }
    };

    return { loading, state, request, handleLogin, handleInputChange, handleUpdateProfile };
};