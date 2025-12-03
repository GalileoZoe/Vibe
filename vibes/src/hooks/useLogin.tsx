import { useReducer, useState, useContext } from 'react';
import { vibeApi } from '../api/vibeApi';
import { RequestLogin } from '../interfaces/Login';
import { AuthContext } from '../context/AuthContext';
import { API_URL } from '@env';


export interface LoginData {
  photo?: string;
  username?: string;
  email?: string;
  password?: string;
  rol?: string;
}

const initialLoginData: LoginData = {
  password: '',
  email: '',
  username: '',
  rol: 'Usuario',
};

type Action = {
  type: 'handleInputChange';
  payload: { fieldName: keyof LoginData; value: string };
};

const dataReducer = (state: LoginData, action: Action): LoginData => {
  switch (action.type) {
    case 'handleInputChange':
      return { ...state, [action.payload.fieldName]: action.payload.value };
    default:
      return state;
  }
};

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(dataReducer, initialLoginData);
  const [request, setRequest] = useState<RequestLogin | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { signIn, changeUserName, changeFavImage } = useContext(AuthContext);

  const handleInputChange = (fieldName: keyof LoginData, value: string) => {
    dispatch({ type: 'handleInputChange', payload: { fieldName, value } });
  };

  // 🔹 LOGIN
  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    setRequest(null);

    if (!state.email || !state.password) {
      setError('Por favor ingresa tu correo y contraseña');
      setLoading(false);
      return;
    }

    try {
      const { data } = await vibeApi.post<RequestLogin>(
        `${API_URL}/login`, // <-- usamos la variable global
        { email: state.email, password: state.password }
      );

      if (data) {
        signIn(data.rol === 'Administrador' ? 'Administrador' : 'Usuario', data.email);
        changeUserName(data.username || 'Sin nombre');
        changeFavImage(data.photo || '');
        setRequest(data);
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err: any) {
      console.error('Error en login:', err);
      setError(err.response?.data?.message || 'Error de red o servidor inalcanzable');
    } finally {
      setLoading(false);
    }
  };

  // 🔹 REGISTER
  const registerLogin = async () => {
    setLoading(true);
    setError(null);
    setRequest(null);

    if (!state.username || !state.email || !state.password) {
      setError('Todos los campos son obligatorios');
      setLoading(false);
      return;
    }

    try {
      const { data } = await vibeApi.post<RequestLogin>(
        `${API_URL}/login/register`, // <-- usamos la variable global
        {
          photo: state.photo || '',
          username: state.username,
          email: state.email,
          password: state.password,
          rol: state.rol || 'Usuario',
        }
      );

      if (data) {
        signIn(data.rol === 'Administrador' ? 'Administrador' : 'Usuario', data.email);
        changeUserName(data.username || 'Nuevo usuario');
        changeFavImage(data.photo || '');
        setRequest(data);
      } else setError('No se pudo registrar el usuario');
    } catch (err: any) {
      console.error('Error en register:', err);
      setError(err.response?.data?.message || 'Error de red o servidor inalcanzable');
    } finally {
      setLoading(false);
    }
  };

  return { loading, state, handleLogin, registerLogin, handleInputChange, request, error };
};
