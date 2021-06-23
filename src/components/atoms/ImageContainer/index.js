import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { colors } from '../../../utils'

const Button = ({style, source}) => {
    return (
        <View style={style}>
          <Image style={styles.image} source={source} />
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    image: {
        width: "100%",
        resizeMode: "contain"
    }
})