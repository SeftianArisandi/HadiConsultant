import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <View style={styles.page}>
            <Text>Halaman Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
