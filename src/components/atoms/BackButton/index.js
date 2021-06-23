import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICArrowLeft, ICArrowRight } from '../../../assets';
import { fonts, colors } from '../../../utils'

const Button = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons name="arrow-back-outline" color={colors.primary} size={25} />
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: colors.button.secondary.background,
        borderRadius: 50/2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})