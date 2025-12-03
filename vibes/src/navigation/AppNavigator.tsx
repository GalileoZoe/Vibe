// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
// import { CustomDrawerContent } from './CustomDrawerContent';

// export type DrawerParamList = {
//   MainStack: undefined;
// };

// const Drawer = createDrawerNavigator<DrawerParamList>();

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={props => <CustomDrawerContent {...props} />}
//         screenOptions={{ headerShown: false }}
//       >
//         <Drawer.Screen name="MainStack" component={StackNavigator} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
