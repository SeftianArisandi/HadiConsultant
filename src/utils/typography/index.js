import { StyleSheet } from 'react-native';
import { fonts } from '../fonts'

export const typography = StyleSheet.create({
  header1: {
    fontFamily: fonts.GilRoy.Bold,
    fontSize: 40,
  },
  header2: {
    fontFamily: fonts.GilRoy.SemiBold,
    fontSize: 36,
  },
  header3: {
    fontFamily: fonts.GilRoy.SemiBold,
    fontSize: 32,
  },
  header4: {
    fontFamily: fonts.GilRoy.SemiBold,
    fontSize: 28,
  },
  header5: {
    fontFamily: fonts.GilRoy.SemiBold,
    fontSize: 24,
  },
  header6: {
    fontFamily: fonts.GilRoy.SemiBold,
    fontSize: 20,
    lineHeight: 23
  }
});