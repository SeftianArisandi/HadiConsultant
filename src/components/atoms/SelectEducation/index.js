import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts, colors } from '../../../utils'
import { Gap } from '../..'

const SelectEducation = ({value, setValue, data, education, title}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Gap height={10}/>
            <View style={styles.selectContainer}>
                {
                data
                .filter(edu => edu.type === education)
                .map((item, index) => {
                    return (
                        <TouchableOpacity key={item.key} style={[styles.buttonContainer, value === item.key ? styles.buttonSelected : styles.buttonDefault]} onPress={() => { setValue(item.key) }}>
                            <Text style={[styles.itemName, value === item.key ? styles.textSelected : styles.textDefault]}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
                }
            </View>
        </View>
    )
}

export default SelectEducation

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontFamily: fonts.GilRoy.SemiBold
    },
    selectContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 6,
        marginRight: 8,
        borderRadius: 50,
        minWidth: 72,
        minHeight: 35,
    },
    buttonDefault: {
        backgroundColor: colors.button.secondary.background,
    },
    buttonSelected: {
        backgroundColor: colors.button.primary.background,
    },
    itemName: {
        fontSize: 12,
        fontFamily: fonts.GilRoy.SemiBold,
    },
    textDefault: {
        color: colors.button.secondary.text
    },
    textSelected: {
        color: colors.button.primary.text
    }
})