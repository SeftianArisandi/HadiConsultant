import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colors } from '../../../utils'
import { TouchableText } from '../../../components'

const Disclaimer = ({style, onPressTerms, onPressPrivacy}) => {
    return (
        <View style={style}>
            <View style={styles.disclaimerTextContainer}>
                <Text style={styles.text}>Dengan mendaftar, Kamu menyetujui</Text>
            </View>
            <View style={styles.usagePrivacyTextContainer}>
                <TouchableText textStyle={{color: colors.button.primary.background}} title={"Ketentuan Penggunaan"} onPress={onPressTerms}/>
                <Text style={styles.text}> dan </Text>
                <TouchableText textStyle={{color: colors.button.primary.background}} title={"Kebijakan Privasi"} onPress={onPressPrivacy}/>
            </View>
        </View>
    )
}

export default Disclaimer

const styles = StyleSheet.create({
    disclaimerTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
    },
    usagePrivacyTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fonts.Nunito[400],
        color: colors.text.secondary,
    },
    touchable: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: fonts.Nunito[400],
        color: colors.button.primary.background
    }
})