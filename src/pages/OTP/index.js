import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground, Text, Dimensions } from 'react-native'
import { ILForgetPassword } from '../../assets'
import { typography, fonts, colors } from '../../utils'
import { Gap, Input, Button, TouchableText, Disclaimer, ImageContainer, BackButton } from '../../components'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const OTP = ({navigation}) => {
    const [email, setEmail] = useState('');

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleGoto = screen => {
        navigation.navigate(screen);
    }

    const isNumber = number => {
        const regexNumber = /^[0-9]+$/;
        if(number.match(regexNumber)){
            return true
        } else {
            return false
        }
    }
    
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Gap height={30}/>
                <BackButton onPress={() => handleGoBack()}/>
                <Gap height={40}/>
                <View style={styles.backgroundImageContainer}>
                    <View style={styles.backgroundImage}>
                        <MaterialIcons name="email" color={colors.primary} size={40} />
                    </View>
                </View>
                <Gap height={20}/>
                <Text style={[typography.header6, {textAlign: 'center'}]}>Masukkan Kode Verifikasi</Text>
                <Gap height={5}/>
                <Text style={styles.subHeader}>Kode verifikasi sudah dikirim ke</Text>
                <Text style={[styles.subHeader, {color: colors.black}]}>“fikriarap@email.com”</Text>
                {/* <Gap height={30}/> */}
                <OTPInputView
                    style={styles.OTP}
                    pinCount={4}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.inputFieldStyle}
                    codeInputHighlightStyle={styles.inputHighlightStyle}
                    onCodeFilled = {(code => {
                        isNumber(code) ? handleGoto('SignUpProfile') : console.log(`Code is ${code}, failed!`)
                    })}
                />
                <View style={styles.resendCode}>
                    <Text style={styles.subHeader}>Belum menerima kode ? </Text>
                    <TouchableText title="Kirim Ulang" onPress={() => handleGoto('SignUp')}/>
                </View>
                {/* temp conditional for waiting resend code */}
                {/* <View style={styles.resendCode}>
                    <Text style={styles.subHeader}>Tunggu </Text>
                    <TouchableText title="60 Detik"/>
                    <Text style={styles.subHeader}> ya untuk kirim ulang kode</Text>
                </View> */}
            </View>
        </View>
    )
}

export default OTP

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    },
    backgroundImageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        width: 80,
        height: 80,
        backgroundColor: colors.componentDefault,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subHeader: {
        fontSize: 14,
        fontFamily: fonts.Nunito[400],
        textAlign: 'center',
        color: colors.text.secondary
    },
    nextButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 25
    },
    OTP:{
        height: 150,
        marginHorizontal: 10,
    },
    inputFieldStyle: {
        fontSize: 18,
        fontFamily: fonts.Nunito[600],
        width: 75,
        height: 75,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: colors.button.secondary.background,
        color: colors.button.secondary.text,
        backgroundColor: colors.button.secondary.background
    },
    inputHighlightStyle: {
        borderColor: "#1A73E8"
    },
    resendCode: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})
