import { ComponentType } from "react";
import { Settings } from "../components/screens/Settings/Settings";
import { Account } from "../components/screens/Account/Account";
import { Chat } from "../components/screens/Chat/Chat";
import { Chats } from "../components/screens/Chat/Chats";
import { IA } from "../components/screens/IA/IA";
import { Info } from "../components/screens/Info/Info";
import { Notifications } from "../components/screens/Notifications/Notifications";
import { Privacy } from "../components/screens/Privacy/Privacy";
import { Profile } from "../components/screens/Profile/Profile";

export type RootStackParamList = {
  MainTabs: undefined;
  Chat: undefined;
  Chats: undefined;
  IA: undefined;
  Notifications: undefined;
  Settings: undefined;
  Account: undefined;
  Info: undefined;
  Profile: undefined;
  Privacy: undefined;
};

export const Screens: Record<keyof RootStackParamList, { component: ComponentType<any> }> = {
  MainTabs: { component: () => null }, // Placeholder, se renderiza BottomTabs directamente
  Chat: { component: Chat },
  Chats: { component: Chats },
  IA: { component: IA },
  Notifications: { component: Notifications },
  Settings: { component: Settings },
  Account: { component: Account },
  Info: { component: Info },
  Profile: { component: Profile },
  Privacy: { component: Privacy },
};

// Define qué pantallas van en BottomTabs
export const tabScreens: (keyof RootStackParamList)[] = [
  'Chat', 'Chats', 'IA', 'Notifications', 'Settings', 'Account', 'Info'
];
