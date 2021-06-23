import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotificationPurchase = () => {
    return (
        <View style={styles.page}>
            <Text>Halaman Pembelian</Text>
        </View>
    )
}

export default NotificationPurchase

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
