import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: viewportHeight * 0.23,
  },
  registerContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  registerTextContainer: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  registerTitle: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold'
  },
  registerText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.gray,
  },
  formRegisterContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  email: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold'
  },
  input: {
    marginVertical: 8,
  },
  ssoLineContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  ssoLineText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.gray,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 50,
    backgroundColor: colors.primary,
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: viewportHeight * -0.15,
    left: 16,
    right: 16,
  },
  accountTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  accountText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.gray,
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#F6931E',
  },
  disclaimerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  usagePrivacyTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  disclaimerText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.gray,
  },
  usagePrivacyText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.primary,
  },
});

export default styles;