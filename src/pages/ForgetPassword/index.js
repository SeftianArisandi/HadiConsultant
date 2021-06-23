import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground, Text, Dimensions } from 'react-native'
import { ILForgetPassword } from '../../assets'
import { typography, fonts, colors } from '../../utils'
import { Gap, Input, Button, TouchableText, Disclaimer, ImageContainer, BackButton } from '../../components'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const ForgetPassword = ({navigation}) => {
    const [email, setEmail] = useState('');

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleGoto = screen => {
        navigation.navigate(screen);
    }
    
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Gap height={30}/>
                <BackButton onPress={() => handleGoBack()}/>
                <Gap height={10}/>
                <ImageContainer style={styles.imageContainer} source={ILForgetPassword}/>
                <Gap height={10}/>
                <Text style={[typography.header6, {textAlign: 'center'}]}>Lupa Password?</Text>
                <Gap height={5}/>
                <Text style={styles.subHeader}>Masukkan emailmu yang terdaftar untuk terima kode OTP sebelum ubah password</Text>
                <Gap height={30}/>
                <Input value={email} onChangeText={(value) => setEmail(value)} label="Email" placeholder="example@mail.com" />
                <Gap height={20}/>
                <View style={styles.nextButton}>
                    <Button title="Lanjutkan" onPress={() => handleGoto('NewPassword')}/>
                </View>
            </View>
        </View>
    )
}

export default ForgetPassword

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
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 25,
    },
})
