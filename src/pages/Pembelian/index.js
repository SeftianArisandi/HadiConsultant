import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Pembelian = () => {
    return (
        <View style={styles.page}>
            <Text>Halaman Pembelian</Text>
        </View>
    )
}

export default Pembelian

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
