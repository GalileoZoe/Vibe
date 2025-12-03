// src/context/AuthReducer.ts
import { AuthState } from './AuthContext';
import { Input } from '../hooks/useFormHookContext';

type AuthAction =
    | { type: 'restore'; payload: AuthState }
    | { type: 'signIn'; payload?: { rol?: string; email?: string } }
    | { type: 'logout' }
    | { type: 'changeFavImage'; payload: string }
    | { type: 'changeUserName'; payload: string }
    | { type: 'setFormData'; payload: Input[] };

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'restore':
            return { ...action.payload };

        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: state.username ?? 'no_name_user_yet',
                rol: action.payload?.rol || 'Usuario',
                email: action.payload?.email,
            };

        case 'logout':
            return {
                isLoggedIn: false,
                username: undefined,
                favoriteImage: undefined,
                rol: undefined,
                email: undefined,
                formData: [],
            };

        case 'changeFavImage':
            return { ...state, favoriteImage: action.payload };

        case 'changeUserName':
            return { ...state, username: action.payload };

        case 'setFormData':
            return { ...state, formData: action.payload };

        default:
            return state;
    }
};
