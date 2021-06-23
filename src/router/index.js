import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { 
    Splash,
    SignUp, 
    OTP, 
    SignUpProfile, 
    SignUpEducation, 
    Login, 
    ForgetPassword, 
    NewPassword,
    OnBoard,
    Home,
    Aktivitas,
    Pembelian,
    Profil,
    NotificationInfo, 
    NotificationPurchase
} from '../pages';
import { BottomNavigator, TopNavigator } from '../components';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const NotificationTab = () => {
    return (
        <TopTab.Navigator tabBar={props => <TopNavigator {...props} />}>
            <TopTab.Screen name="Info" component={NotificationInfo} />
            <TopTab.Screen name="Pembelian" component={NotificationPurchase} />
        </TopTab.Navigator>
    )
}

const MainApp = () => {
    return (
        <BottomTab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Aktifitas" component={Aktivitas} />
            <BottomTab.Screen name="Pembelian" component={Pembelian} />
            <BottomTab.Screen name="Profil" component={Profil} />
        </BottomTab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="NitificationTab">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
            <Stack.Screen name="SignUpProfile" component={SignUpProfile} options={{headerShown: false}} />
            <Stack.Screen name="SignUpEducation" component={SignUpEducation} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}} />
            <Stack.Screen name="NewPassword" component={NewPassword} options={{headerShown: false}} />
            <Stack.Screen name="OnBoard" component={OnBoard} options={{headerShown: false}} />
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name="NitificationTab" component={NotificationTab} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router;
