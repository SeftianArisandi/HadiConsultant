import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/colors';
import styles from './styles';
import bgImage from '../../assets/images/bg-waves.png';
import { Input } from '../../components/Input';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setForm } from '../../redux';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Register = ({navigation}) => {
  const RegisterReducer = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  const handleGoto = screen => {
    navigation.navigate(screen);
  }

  const sendData = () => {
    // console.log('data yang dikirim: ', LoginReducer.form);
    handleGoto('RegisterProfile');
  }

  const onInputChange = (input, value) => {
    dispatch(setForm(input, value))
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={bgImage} style={styles.backgroundImage}></ImageBackground>
      <View style={styles.registerContainer}>
        <View style={styles.registerTextContainer}>
          <Text style={styles.registerTitle}>Yuk, Daftar!</Text>
          <Text style={styles.registerText}>Belajar dan wujudkan mimpi kamu</Text>
        </View>
        <View style={styles.formRegisterContainer}>
          <Text style={styles.email}>Email</Text>
          <Input style={styles.input} placeholder="john@example.com" value={RegisterReducer.form.email} onChangeText={value => onInputChange('email', value)}/>
          <View style={styles.buttonContainer}>
            {/* <TouchableOpacity style={styles.button} onPress={() => handleGoto('RegisterProfile')}> */}
            <TouchableOpacity style={styles.button} onPress={() => sendData()}>
              <Text style={[styles.buttonText, {color: 'white'}]}>Lanjutkan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ssoLineContainer}>
            <Text style={styles.ssoLineText}>atau melalui</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, {backgroundColor: colors.componentDefault}]}>
              <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: colors.componentDefault}]}>
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.accountTextContainer}>
            <Text style={styles.accountText}>Sudah punya akun ? </Text>
            <TouchableOpacity onPress={() => handleGoto('Login')}>
              <Text style={styles.loginText}>Masuk</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.disclaimerTextContainer}>
              <Text style={styles.disclaimerText}>Dengan mendaftar, Kamu menyetujui</Text>
            </View>
            <View style={styles.usagePrivacyTextContainer}>
              <TouchableOpacity>
                <Text style={styles.usagePrivacyText}>Ketentuan Penggunaan</Text>
              </TouchableOpacity>
                <Text style={styles.disclaimerText}> dan </Text>
              <TouchableOpacity>
                <Text style={styles.usagePrivacyText}>Kebijakan Privasi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
