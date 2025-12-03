import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { DrawerProvider } from "./src/components/layout/Drawer";
import { Layout } from "./src/components/layout/Layout";
import { TouchIDProvider } from "./src/context/TouchIDContext";
import { ModalProvider } from "./src/context/ModalContext";


const App = () => {
  console.log("API_URL:", process.env.API_URL); // Verificar que la variable se carga correctamente
  console.log("API_URL:", process.env.API_URL); // Verificar que la variable se carga correctamente
  return (
    <AuthProvider>
      <TouchIDProvider>
        <ThemeProvider>
          <ModalProvider>
            <NavigationContainer>
              <DrawerProvider>
                <Layout />
              </DrawerProvider>
            </NavigationContainer>
          </ModalProvider>
        </ThemeProvider>
      </TouchIDProvider>
    </AuthProvider>
  );
};

export default App;
