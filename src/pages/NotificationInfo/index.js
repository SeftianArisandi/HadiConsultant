import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotificationInfo = () => {
    return (
        <View style={styles.page}>
            <Text>Halaman Info</Text>
        </View>
    )
}

export default NotificationInfo

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
