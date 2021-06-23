import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        marginTop: 430,
        width: '100%',
        height: '100%'
    }
})