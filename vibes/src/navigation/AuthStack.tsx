// AuthStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../components/screens/Login/Login';
import { Register } from '../components/screens/Login/LoginRegister';

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);
