import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { fonts, colors } from '../../../utils'

const Button = ({title, style, onPress}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.button.primary.background,
        justifyContent: 'center',
        borderRadius: 30,
        height: 45,
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: fonts.GilRoy.SemiBold,
        textAlign: 'center',
        color: colors.button.primary.text
    }
})