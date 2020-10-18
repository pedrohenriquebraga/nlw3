import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Lottie from 'lottie-react-native'

import LoadingAnimation from '../animations/loading-animation.json'

export default function Loading() {
    return (
        <View style={styles.Container}>
            <Lottie source={LoadingAnimation} loop autoPlay />
            <Text style={styles.LoadingText}>Buscando o orfanato...</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        justifyContent: "space-between",
        alignItems: "center"
    },

    LoadingText: {
        fontSize: 24,
        fontFamily: "nunito700",
        color: '#15b6d6',
        marginTop: 200
    }
})