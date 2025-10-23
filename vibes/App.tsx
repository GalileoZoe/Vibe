import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/components/layout/Tabs';
import { AuthProvider } from './src/context/AuthContext';
import { FeedProvider } from './src/context/FeedContext';
import { SessionProvider } from './src/context/Session';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  return (
    <AuthProvider>
      <SessionProvider>
        {/* <IdProvider> */}
          <ThemeProvider>
            {/* <CartProvider> */}
              <FeedProvider>
                <NavigationContainer>
                  <Tabs />
                </NavigationContainer>
              </FeedProvider>
            {/* </CartProvider> */}
          </ThemeProvider>
        {/* </IdProvider> */}
      </SessionProvider>
    </AuthProvider>
  );
};

export default App;
