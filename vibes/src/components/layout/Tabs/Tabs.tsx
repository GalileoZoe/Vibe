// components/layout/MyCustomTabBar.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useDrawer } from '../Drawer';

export const Tabs = ({ state, navigation }: BottomTabBarProps) => {
    const { openDrawer, visible, closeDrawer } = useDrawer();

    return (
        <View style={styles.container}>
            {state.routes.map((route, idx) => {
                const isFocused = state.index === idx;
                let iconName = 'ellipse-outline';

                switch (route.name) {
                    case 'Chats':
                        iconName = isFocused ? 'chatbubble' : 'chatbubble-outline';
                        break;
                    case 'Chat':
                        iconName = isFocused ? 'chatbubbles' : 'chatbubbles-outline';
                        break;
                    case 'IA':
                        iconName = 'hardware-chip-outline';
                        break;
                    case 'Notifications':
                        iconName = isFocused ? 'notifications' : 'notifications-outline';
                        break;
                    default:
                        iconName = 'ellipse-outline';
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={styles.tabButton}
                        onPress={() => navigation.navigate(route.name)}
                    >
                        <Ionicons name={iconName as any} size={28} color={isFocused ? '#111' : '#888'} />
                    </TouchableOpacity>
                );
            })}

            {/* Botón único del drawer */}
            <TouchableOpacity style={styles.tabButton} onPress={visible ? closeDrawer : openDrawer}>
                <Ionicons name="menu" size={28} color="#111" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.08)',
        backgroundColor: '#fff',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
