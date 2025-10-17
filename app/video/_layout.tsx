import { Slot } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';

export default function VideoLayout() {
    return (
        <View style={styles.container}>
            <Slot />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // fondo oscuro premium para video
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
});
