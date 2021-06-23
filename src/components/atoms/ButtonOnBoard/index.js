import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { fonts, colors } from '../../../utils'

const ButtonIcon = ({title, onPress, type}) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'primary' ? colors.button.primary.background : colors.button.secondary.background,
        paddingVertical: 15,
        justifyContent: 'center',
        borderRadius: 50,
        height: 50,
        flexDirection: 'row',
        flex: 1,
    }),
    text: (type) => ({
        fontSize: 14,
        fontFamily: fonts.GilRoy.SemiBold,
        textAlign: 'center',
        color: type === 'primary' ? colors.button.primary.text : colors.button.secondary.text
    })
})