// import React, { useState, useEffect, useRef } from 'react';
// import { View, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

// import { v4 as uuidv4 } from 'uuid';
// import dayjs from 'dayjs';
// import { Message } from '../../../interfaces/Chat';
// import { ChatMessage } from '../../components/Chat/ChatMessagge';
// import { ChatInput } from '../../components/Chat/ChatInput';
// import { useTheme } from '../../../context/ThemeContext';

// export const ChatScreen: React.FC = () => {
// const { theme } = useTheme();
//   const [messages, setMessages] = useState<Message[]>([]);
//   const flatListRef = useRef<FlatList>(null);

//   const currentUserId = 'user-123'; // reemplazar con auth real

//   const sendMessage = (text: string) => {
//     const newMessage: Message = {
//       id: uuidv4(),
//       text,
//       userId: currentUserId,
//       userName: 'Yo',
//       createdAt: dayjs().toISOString(),
//     };

//     setMessages(prev => [...prev, newMessage]);

//     // Scroll automático al último mensaje
//     setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       keyboardVerticalOffset={80}
//     >
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <ChatMessage
//             message={item}
//             isOwnMessage={item.userId === currentUserId}
//           />
//         )}
//         contentContainerStyle={{ padding: 12 }}
//       />
//       <ChatInput onSend={sendMessage} />
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
    
//   container: { flex: 1, backgroundColor: '#000' },
// });
