import React from 'react'
import { Feather } from '@expo/vector-icons'
import mapMarker from '../images/map-marker.png'
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap() {
    const navigation = useNavigation()
    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails')
    }
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -16.7411414,
                    longitude: -49.351167,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}
            >
                <Marker
                    icon={mapMarker}
                    coordinate={{
                        latitude: -16.7411414,
                        longitude: -49.351167
                    }}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8,
                    }}
                >
                    <Callout tooltip 
                    onPress={handleNavigateToOrphanageDetails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Lar das Meninas</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>2 Orfanatos encontrados</Text>

                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }}>
                    <Feather name="plus" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        borderRadius: 16,
        justifyContent: 'center'
    },

    calloutText: {
        fontFamily: 'nunito700',
        color: '#0089a5',
        fontSize: 14
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,
        backgroundColor: '#fff',
        borderRadius: 28,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
    },
    footerText: {
        fontFamily: 'nunito700',
        color: '#0fa7b3'
    },
    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
