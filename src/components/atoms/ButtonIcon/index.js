import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { ICFacebook, ICGoogle } from '../../../assets'

const ButtonIcon = ({title, onPress, iconType}) => {
    if (iconType === "icon-google") {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={ICGoogle} style={styles.iconWrapper} resizeMode='stretch'/>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        )
    }
    if (iconType === "icon-facebook") {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={ICFacebook} style={styles.iconWrapper} resizeMode='stretch'/>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        )
    }
    return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={ICFacebook} style={styles.iconWrapper} resizeMode='stretch'/>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.button.secondary.background,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        height: 45,
        flexDirection: 'row',
        flex: 1,

    },
    iconWrapper: {
        width:18,
        height:18,
        marginRight: 10
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.GilRoy.SemiBold,
        textAlign: 'center',
        color: colors.button.secondary.text
    }
})