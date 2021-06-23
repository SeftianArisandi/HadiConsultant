import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { ICShowPassword, ICHidePassword } from '../../../assets';
import { colors, fonts } from '../../../utils'

const InputPassword = ({label, value, onChangeText, placeholder, error}) => {
    const [border, setBorder] = useState(colors.input.background);
    const [background, setBackground] = useState(colors.input.background);
    const [password, setPassword] = useState(true);
    
    const onFocusForm = () => {
        setBorder(colors.primary);
        setBackground('white');
    };

    const onBlurForm = () => {
        setBorder(colors.input.background);
        setBackground(colors.input.background);
    };

    const ShowHidePassword = () => {
        if(password){
            setPassword(false);
        }else{
            setPassword(true);
        }
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input(border, background, error)}>
                <TextInput 
                    value={value}
                    onFocus={onFocusForm} 
                    onBlur={onBlurForm}
                    secureTextEntry={password}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={colors.text.secondary}
                    color={colors.text.primary}
                    style={{flex: 1}}
                />
                <TouchableOpacity style={{alignSelf: 'center'}} onPress={ShowHidePassword}>
                    {password ? <ICShowPassword /> : <ICHidePassword />}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default InputPassword

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontFamily: fonts.GilRoy.Bold,
        color: colors.text.primary,
        marginBottom: 8
    },
    input: (border, background, error) => ({
        height: 45,
        borderWidth: 1,
        borderColor: error ? colors.errorInput.border : border,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 15,
        color: colors.text.primary,
        backgroundColor: error ? colors.errorInput.background : background,
        flexDirection: 'row',
    })
})
