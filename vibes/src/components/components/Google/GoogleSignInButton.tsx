// import * as Google from "expo-auth-session/providers/google";
// import * as WebBrowser from "expo-web-browser";
// import { useEffect } from "react";
// import { TouchableOpacity, Text, Alert } from "react-native";

// WebBrowser.maybeCompleteAuthSession();

// export const GoogleSignInButton: React.FC = () => {
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     expoClientId: "TU_CLIENT_ID_EXPO.apps.googleusercontent.com",
//     iosClientId: "TU_CLIENT_ID_IOS.apps.googleusercontent.com",
//     androidClientId: "TU_CLIENT_ID_ANDROID.apps.googleusercontent.com",
//     webClientId: "TU_CLIENT_ID_WEB.apps.googleusercontent.com",
//   });

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { authentication } = response;
//       Alert.alert("Login con Google", "Autenticación exitosa");
//       console.log("AccessToken:", authentication?.accessToken);
//       // Aquí llamas tu backend NestJS para login/register con Google
//     }
//   }, [response]);

//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: "#fff",
//         padding: 12,
//         marginTop: 10,
//         borderRadius: 8,
//         alignItems: "center",
//       }}
//       onPress={() => promptAsync()}
//       disabled={!request}
//     >
//       <Text style={{ color: "#111", fontWeight: "600" }}>
//         Registrarme con Google
//       </Text>
//     </TouchableOpacity>
//   );
// };
