import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { typography, fonts, colors } from '../../../utils'

const TouchableText = ({style, textStyle, title, onPress}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TouchableText

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: fonts.Nunito[600],
        textAlign: 'center',
        color: '#F6931E'
    }
})