// src/components/Modal.tsx
import React from 'react';
import { Modal as RNModal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useModal } from '../../../context/ModalContext';
type ModalProps = {
  // Opcional: estilos personalizados o props extra en el futuro
};

export const Modal: React.FC<ModalProps> = () => {
  const { visible, hideModal, content } = useModal() as any; // content lo extraemos del context

  if (!visible) return null;

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={hideModal}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {content}
          <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
            <Text style={styles.closeText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    minWidth: 250,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
