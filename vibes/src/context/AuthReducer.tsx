// AuthReducer.tsx
import { AuthState } from "./AuthContext";
import { Input } from "../hooks/useFormHookContext";

type AuthAction = 
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeId', payload: string }
    | { type: 'changeFavImage', payload: string }
    | { type: 'changeUserName', payload: string }
    | { type: 'changeEmail', payload: string }
    | { type: 'changeRol', payload: string }
    | { type: 'loadState', payload:string}
    | { type: 'setFormData', payload: Input[] };

export const AuthReducer = (state: AuthState, action: any): AuthState => {
    switch (action.type) {
        case "signIn":
            return {
                ...state,
                isLoggedIn: true,
                username: "Ingresa Tu Username", // Cambiar si es necesario
            };
            case "changeId":
                return {
                    ...state,
                    _id: action.payload,
                };
        case "changeFavImage":
            return {
                ...state,
                favoriteImage: action.payload,
            };
        case "changeUserName":
            return {
                ...state,
                username: action.payload,
            };
        case "changeEmail":
            return {
                ...state,
                email: action.payload,
            };
        case "changeRol":
            return {
                ...state,
                rol: action.payload,
            };
            case 'setFormData':
                return {
                    ...state,
                    formData: action.payload,
                };
            case "logout":
                return {
                    ...state,
                    isLoggedIn: false,
                    username: undefined,
                    favoriteImage: undefined,
                };
                case "loadState":
                    return { ...state, ...action.payload };
        default:
            return state;
    }
};