import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground, Text, Dimensions } from 'react-native'
import { ILForgetPassword } from '../../assets'
import { typography, fonts, colors } from '../../utils'
import { Gap, Input, Button, TouchableText, Disclaimer, ImageContainer, BackButton} from '../../components'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const NewPassword = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

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
                <Text style={[typography.header6, {textAlign: 'center'}]}>Buat Password Baru</Text>
                <Gap height={5}/>
                <Text style={styles.subHeader}>Ikuti format yang disediakan agar keamanan password akunmu terjaga</Text>
                <Gap height={30}/>
                <Input value={password} onChangeText={(value) => setPassword(value)} label="Password" placeholder="" />
                <Gap height={20}/>
                <Input value={confPassword} onChangeText={(value) => setConfPassword(value)} label="Konfirmasi Password" placeholder="" />
                <Gap height={20}/>
                <View style={styles.nextButton}>
                    <Button title="Lanjutkan" onPress={() => handleGoto('SignUpEducation')}/>
                </View>
            </View>
        </View>
    )
}

export default NewPassword

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