import React from 'react'
import { StyleSheet, View, ImageBackground, Text, Dimensions, TextInput, StatusBar } from 'react-native'
import { ILSignUpBg, ILSignUpLogo } from '../../assets'
import { fonts, colors } from '../../utils'
import { Gap, Button, ButtonIcon, TouchableText, Disclaimer, Input } from '../../components'
import { Formik } from 'formik'
import * as yup from 'yup'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const SignUp = ({navigation}) => {

    const printData = (data) => {
        if (!touched.email && !errors.email) {
            console.log(data);
        }
    }

    return (
        <Formik
            initialValues={{email: ''}}
            validationSchema={yup.object().shape({
                email: yup
                    .string()
                    .matches(/@/, 'Format email harus menggunakan "@"')
                    .email('Format email tidak valid')
                    .required('Masukkan data terlebih dahulu')
            })}
        >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <View style={styles.page}>
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground source={ILSignUpBg} style={styles.imageBackground} />
                <View style={styles.container}>
                    <View style={{width: '100%', height: 0}}>
                        <ILSignUpLogo style={{
                            alignSelf: 'center', 
                            marginTop: -120,
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
                    <View>
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="example@mail.com"
                            placeholderTextColor={colors.text.secondary}
                            color={colors.text.primary}
                            style={touched.email && errors.email ? styles.inputError : styles.input}
                        />
                    </View>
                    {touched.email && errors.email &&
                        <View>
                            <Gap height={5}/>
                            <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>{errors.email}</Text>
                        </View>
                    }
                    <Gap height={20}/>
                    <Button title="Lanjutkan" onPress={() => printData(values.email)}/>
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
        )}
        </Formik>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        width: viewportWidth,
        height: viewportHeight,
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
