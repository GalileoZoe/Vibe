import React, { useState } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import { Card } from '../components/Card';
import { Item } from '../components/Item';
import { Button } from '../components/Button';

export const Settings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    console.log('Configuraciones guardadas:', { notificationsEnabled, darkMode });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12 }}>Configuración</Text>

      <Card title="Preferencias">
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
          <Item label="Notificaciones" value={notificationsEnabled ? 'Activadas' : 'Desactivadas'} />
          <Switch
            value={notificationsEnabled}
            onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
          <Item label="Modo oscuro" value={darkMode ? 'Activo' : 'Inactivo'} />
          <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
        </View>
      </Card>

      <Button label="Guardar cambios" onPress={handleSave} />
    </ScrollView>
  );
};
