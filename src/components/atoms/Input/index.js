import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({label, value, onChangeText, placeholder, error}) => {
    const [border, setBorder] = useState(colors.input.background);
    const [background, setBackground] = useState(colors.input.background);

    const onFocusForm = () => {
        setBorder(colors.primary);
        setBackground('white');
    };

    const onBlurForm = () => {
        setBorder(colors.input.background);
        setBackground(colors.input.background);
    };
    
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                value={value}
                onFocus={onFocusForm} 
                onBlur={onBlurForm}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.text.secondary}
                color={colors.text.primary}
                style={styles.input(border, background, error)}
            />
        </View>
    )
}

export default Input

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
    })
})
