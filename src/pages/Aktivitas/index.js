import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Aktivitas = () => {
    return (
        <View style={styles.page}>
            <Text>Halaman Aktivitas</Text>
        </View>
    )
}

export default Aktivitas

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
