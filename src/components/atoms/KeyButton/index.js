import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { typography, fonts, colors } from '../../../utils'

const KeyButton = ({text, style, onPress}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default KeyButton

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 6,
        marginRight: 8,
        borderRadius: 50,
        minWidth: 72,
        minHeight: 35,
        backgroundColor: colors.button.secondary.background,
    },
    text: {
        fontSize: 12,
        fontFamily: fonts.GilRoy.SemiBold,
        color: colors.button.secondary.text
    }
})