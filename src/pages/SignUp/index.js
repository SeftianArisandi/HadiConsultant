import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground, Text, Dimensions, StatusBar } from 'react-native'
import { ILSignUpBg, ILSignUpLogo } from '../../assets'
import { fonts, colors } from '../../utils'
import { Gap, Button, ButtonIcon, TouchableText, Disclaimer, Input } from '../../components'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorRequired, setErrorRequired] = useState(false);
    const [errorAtEmail, setErrorAtEmail] = useState(false);

    const RegexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const RegexAtEmail = /@/;

    const Submit = () => {
        if(email === ''){
            setErrorRequired(true)
            setErrorAtEmail(false);
            setErrorEmail(false);
        }else{
            setErrorRequired(false);
            if(!RegexAtEmail.test(email)){
                setErrorAtEmail(true);
                setErrorEmail(false);
            }else{
                setErrorAtEmail(false);
                if(!RegexEmail.test(email)){
                    setErrorEmail(true);
                }else{
                    setErrorEmail(false);
                    navigation.replace('OTP');
                }
            }
        }
    }

    return (
        <View style={styles.page}>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={ILSignUpBg} style={styles.imageBackground} />
            <View style={styles.container}>
                <View style={{width: '100%', height: 0}}>
                    <ILSignUpLogo style={{
                        alignSelf: 'center', 
                        marginTop: -115,
                        // shadowOffset: { width: 10, height: 10 },
                        // shadowColor: 'black',
                        // shadowOpacity: 1,                            
                        // elevation: 3,
                    }} />
                </View>
                <Gap height={65}/>
                <Text style={styles.header}>Yuk, Daftar!</Text>
                <Text style={styles.subHeader}>Belajar dan wujudkan mimpi kamu</Text>
                <Gap height={20}/>
                <Input 
                    value={email} 
                    onChangeText={(value) => setEmail(value)} 
                    label="Email" 
                    placeholder="example@mail.com" 
                    error={errorRequired || errorAtEmail || errorEmail ? true : false}
                />
                {errorRequired &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Masukkan data terlebih dahulu</Text>
                    </View>
                }
                {errorAtEmail &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Format email harus menggunakan “@“</Text>
                    </View>
                }
                {errorEmail &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Format domain email tidak valid</Text>
                    </View>
                }
                <Gap height={20}/>
                <Button title="Lanjutkan" onPress={Submit}/>
                <Gap height={15}/>
                <View style={styles.ssoLineContainer}>
                    <Text style={styles.subHeader}>atau melalui</Text>
                </View>
                <Gap height={15}/>
                <View style={styles.buttonContainer}>
                    <ButtonIcon style={styles.button} title="Google" iconType="icon-google"/>
                    <ButtonIcon style={styles.button} title="Facebook" iconType="icon-facebook"/>
                </View>
                <Gap height={20}/>
                <View style={styles.accountTextContainer}>
                    <Text style={styles.subHeader}>Sudah punya akun ? </Text>
                    <TouchableText title="Masuk" onPress={() => navigation.replace('Login')}/>
                </View>
                <Disclaimer style={styles.disclaimer}/>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    imageBackground: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    container: {
        flex: 9,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'flex-start',
        marginTop: -30,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    header: {
        fontSize: 20,
        fontFamily: fonts.GilRoy.Bold
    },
    subHeader: {
        fontSize: 14,
        fontFamily: fonts.Nunito[400],
        color: colors.text.secondary
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.GilRoy.Bold,
        color: colors.text.primary,
        marginBottom: 8
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: colors.input.background,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 15,
        color: colors.input.text,
        backgroundColor: colors.input.background
    },
    inputError: {
        height: 40,
        borderWidth: 1,
        borderColor: colors.errorInput.border,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 15,
        color: colors.text.primary,
        backgroundColor: colors.errorInput.background
    },
    ssoLineContainer: {
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    accountTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    disclaimer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 25
    },
})
