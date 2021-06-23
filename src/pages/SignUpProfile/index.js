import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, StatusBar, ScrollView } from 'react-native'
import { fonts, colors } from '../../utils'
import { Gap, Input, Button, InputPassword, BackButton } from '../../components'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const SignUpProfile = ({navigation}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [moveStatus, setMoveStatus] = useState('');

    // Name Validator State
    const [errorName, setErrorName] = useState(false);
    // Phone Validator State
    const [phoneRequired, setPhoneRequired] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [numberOnly, setNumberOnly] = useState(false);
    // Password Validator State
    const [passwordMinLength, setPasswordMinLength] = useState('START');
    const [passwordContainNumber, setPasswordContainNumber] = useState('START');

    const RegexNumberOnly = /[^0-9]/g;
    const RegexContainNumber = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

    useEffect(() => {
        if(errorName === false && phoneRequired === false && errorPhone === false && numberOnly === false && passwordMinLength === 'SUCCESS' && passwordContainNumber === 'SUCCESS'){
            navigation.navigate('SignUpEducation');
        }
    }, [moveStatus]);

    const ResetValidator = () => {
        setErrorName(false);
        setPhoneRequired(false);
        setErrorPhone(false);
        setNumberOnly(false);
        setPasswordMinLength('START');
        setPasswordContainNumber('START');
    }

    const Submit = () => {
        // Name Validation
        if(name === ''){
            setErrorName(true);
        }else{
            setErrorName(false);
        }
        // Phone Validation
        if(phone === ''){
            setPhoneRequired(true);
        }else{
            setPhoneRequired(false);
            if(phone.length > 12){
                setErrorPhone(true);
            }else{
                setErrorPhone(false);
                if(!RegexNumberOnly.test(phone)){
                    setNumberOnly(false);
                }else{
                    setNumberOnly(true);
                }
            }
        }
        // Password Validation
        if(password.length <= 8){
            setPasswordMinLength('ERROR');
        }else{
            setPasswordMinLength('SUCCESS');
        }
        if(!RegexContainNumber.test(password)){
            setPasswordContainNumber('ERROR');
        }else{
            setPasswordContainNumber('SUCCESS');
        }
        setMoveStatus(Math.random());
    }
    
    return (
        <View style={styles.page}>
            <StatusBar barStyle="light-content" hidden={true} translucent={false}/>
            <View style={styles.content}>
                <Gap height={30}/>
                <BackButton onPress={() => handleGoBack()}/>
                <Gap height={20}/>
                <Text style={styles.title}>Isi Profilemu!</Text>
                <Text style={styles.desc}>Lengkapi sesuai identitasmu ya!</Text>
                <Gap height={25}/>
                <Input 
                    value={name} 
                    onChangeText={(value) => setName(value)} 
                    label="Nama Lengkap" 
                    error={errorName ? true : false}
                />
                {errorName &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Masukkan nama lengkap terlebih dahulu</Text>
                    </View>
                }
                <Gap height={15}/>
                <Input 
                    value={phone} 
                    onChangeText={(value) => setPhone(value)} 
                    label="Nomor Telepon" 
                    placeholder="Contoh : 081339543551" 
                    error={errorPhone || numberOnly || phoneRequired ? true : false}
                />
                {phoneRequired &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Masukkan nomor telepon terlebih dahulu</Text>
                    </View>
                }
                {errorPhone &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Nomor yang dimasukkan maksimum 12 angka</Text>
                    </View>
                }
                {numberOnly &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Data yang harus berupa angka</Text>
                    </View>
                }
                <Gap height={15}/>
                <InputPassword 
                    value={password} 
                    onChangeText={(value) => setPassword(value)} 
                    label="Password"
                    error={passwordContainNumber === 'ERROR' || passwordMinLength === 'ERROR' ? true : false}
                />
                {passwordContainNumber === 'SUCCESS' && passwordMinLength === 'SUCCESS' &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: '#5AC496'}}>Keamanan Password : “Kuat”</Text>
                    </View>
                }
                {passwordContainNumber === 'ERROR' && passwordMinLength === 'ERROR' &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Minimum 8 karakter</Text>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Ada unsur angka</Text>
                    </View>
                }
                {passwordContainNumber === 'SUCCESS' && passwordMinLength === 'ERROR' &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Minimum 8 karakter</Text>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: '#5AC496'}}>Ada unsur angka</Text>
                    </View>
                }
                {passwordContainNumber === 'ERROR' && passwordMinLength === 'SUCCESS' &&
                    <View>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: '#5AC496'}}>Minimum 8 karakter</Text>
                        <Gap height={5}/>
                        <Text style={{ fontSize: 14,fontFamily: fonts.Nunito[400], color: colors.text.error}}>Ada unsur angka</Text>
                    </View>
                }
                <Gap height={30}/>
            </View>
            <View style={styles.nextButton}>
                <Button title="Lanjutkan" onPress={Submit}/>
            </View>
        </View>
    )
}

export default SignUpProfile

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        flex: 8,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.GilRoy.Bold,
        color: colors.text.primary,
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.Nunito[400],
        color: colors.text.secondary
    },
    nextButton: {
        flex: 2,
        justifyContent: 'flex-end',
        marginBottom: 25,
        paddingHorizontal: 20,
    },
})
