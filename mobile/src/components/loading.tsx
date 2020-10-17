import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.Container}>
            <Text style={styles.LoadingText}>Buscando o orfanato...</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },

    LoadingText: {
        fontSize: 24,
        fontFamily: "nunito700",
        color: '#15b6d6'
    }
})