import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Message } from '../../../interfaces/Chat';


interface Props {
  message: Message;
  isOwnMessage: boolean;
}

export const ChatMessage: React.FC<Props> = ({ message, isOwnMessage }) => {
    
  return (
    <View
      style={[
        styles.container,
        isOwnMessage ? styles.ownMessageBlack : styles.otherMessage,
      ]}
    >
      {!isOwnMessage && <Text style={styles.userName}>{message.userName}</Text>}
      <Text style={styles.text}>{message.text}</Text>
      <Text style={styles.time}>{new Date(message.createdAt).toLocaleTimeString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '75%',
    marginVertical: 4,
    padding: 8,
    borderRadius: 10,
  },
  ownMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  ownMessageBlack: {
    backgroundColor: '#000',
    alignSelf: 'flex-end',
    borderColor:'#fff',
    borderWidth:1,
  },
  otherMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  userName: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
    color: '#555',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  time: {
    fontSize: 10,
    color: '#ddd',
    alignSelf: 'flex-end',
    marginTop: 2,
  },
});
