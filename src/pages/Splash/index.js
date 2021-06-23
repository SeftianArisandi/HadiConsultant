import React ,{ useEffect } from 'react'
import { StyleSheet, ImageBackground, View, Text } from 'react-native'
import { ILSplashBg, ILSplashLogo } from '../../assets'
import { useDispatch } from 'react-redux'

const Splash = ({navigation}) => {
    const dispatch = useDispatch();
    dispatch({type: 'SET_LOADING', value: true});
    
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('OnBoard');
            dispatch({type: 'SET_LOADING', value: false});
        }, 6000);
    }, []);
    return (
        <ImageBackground source={ILSplashBg} style={styles.page}>
            <ILSplashLogo style={styles.logo}/>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    logo: {
        width: 108,
        height: 108
    }
})
