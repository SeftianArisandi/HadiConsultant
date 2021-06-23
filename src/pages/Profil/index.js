import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profil = () => {
    return (
        <View style={styles.page}>
            <Text>Halaman Profil</Text>
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
