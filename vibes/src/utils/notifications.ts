// import * as Notifications from "expo-notifications";
// import { Platform } from "react-native";

// // HANDLER CORRECTO
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// // CANAL ANDROID
// export async function configureAndroidChannel() {
//   if (Platform.OS === "android") {
//     await Notifications.setNotificationChannelAsync("default", {
//       name: "Default",
//       importance: Notifications.AndroidImportance.HIGH,
//     });
//   }
// }

// // PERMISOS
// export async function requestNotificationPermission(): Promise<boolean> {
//   const { status } = await Notifications.requestPermissionsAsync();
//   return status === "granted";
// }

// // NOTIFICACIÓN LOCAL
// export async function sendLocalNotification(title: string, body: string) {
//   if (!title || !body) return;

//   return await Notifications.scheduleNotificationAsync({
//     content: { title, body },
//     trigger: null,
//   });
// }
