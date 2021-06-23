import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground, Text, Dimensions } from 'react-native'
import { ILSignUp } from '../../assets'
import { typography, fonts, colors } from '../../utils'
import { Gap, Input, Button, TouchableText, Disclaimer, SelectEducation, BackButton } from '../../components'
import { dummyEducation } from '../../assets/dummyEducation';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const SignUpEducation = ({navigation}) => {
    const [education, setEducation] = useState('');

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
                <Gap height={40}/>
                <Text style={typography.header6}>Isi Pendidikan!</Text>
                <Text style={styles.subHeader}>Lengkapi sesuai jenjang pendidikanmu ya!</Text>
                <Gap height={30}/>
                <Text style={styles.body}>Pilih Kelasmu!</Text>
                <Gap height={10}/>
                <SelectEducation value={education} setValue={setEducation} data={dummyEducation} education={"SD"} title={"SD"}/>
                <Gap height={20}/>
                <SelectEducation value={education} setValue={setEducation} data={dummyEducation} education={"SMP"} title={"SMP"}/>
                <Gap height={20}/>
                <SelectEducation value={education} setValue={setEducation} data={dummyEducation} education={"SMA"} title={"SMA"}/>
                <View style={styles.nextButton}>
                    <Button title="Selesai" onPress={() => console.log(education)}/>
                </View>
            </View>
        </View>
    )
}

export default SignUpEducation

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
    subHeader: {
        fontSize: 14,
        fontFamily: fonts.Nunito[400],
        color: colors.text.secondary
    },
    body: {
        fontSize: 16,
        fontFamily: fonts.GilRoy.Bold,
        color: colors.text.primary
    },
    nextButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 25
    },
})
