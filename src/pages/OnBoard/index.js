import React, {useRef} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {colors, fonts} from '../../utils';
import AppIntroSlider from 'react-native-app-intro-slider';
import { ButtonOnBoard, Gap } from '../../components';
import { ICArrowLeft, ICArrowRight } from '../../assets';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const slides = [
  {
    title: 'Hai, Sobat Pijar!',
    text: 'Platform pebelajaran yang akan bantu wujudin mimpi kamu!',
    image: require('../../assets/illustration/illustration_onboarding_slide_1.png'),
    bgImage: require('../../assets/illustration/bg_onboarding_slide_1.png'),
    firstSlide: true,
  },
  {
    title: 'Kapanpun dan Dimanapun',
    text: 'Tidak perlu repot duduk di kelas, sambil rebahan pun juga bisa!',
    image: require('../../assets/illustration/illustration_onboarding_slide_2.png'),
    bgImage: require('../../assets/illustration/bg_onboarding_slide_2.png'),
    secondSlide: true,
  },
  {
    title: 'Yuk Mulai Belajar!',
    text: 'Tingkatkan nilai dan capai impianmu dari sekarang!',
    image: require('../../assets/illustration/illustration_onboarding_slide_3.png'),
    bgImage: require('../../assets/illustration/bg_onboarding_slide_3.png'),
    lastSlide: true,
  },
];

const Onboard = ({navigation}) => {

  const type = 'disable';
  const slider = useRef();

  const renderItem = ({item}) => {
    return (
      <View style={styles.page}>
        <ImageBackground source={item.bgImage} style={styles.bgImage} resizeMode="stretch">
          {item.firstSlide && (
            <TouchableOpacity style={styles.skipWrapper} onPress={() => slider.current.goToSlide(2, true)}>
              <Text style={styles.skipText}>Lewati</Text>
            </TouchableOpacity>
          )}
          {item.lastSlide && (
            <TouchableOpacity style={styles.skipWrapper} onPress={() => slider.current.goToSlide(0, true)}>
              <Text style={styles.skipText}>Telusuri</Text>
            </TouchableOpacity>
          )}
          <Image style={styles.image} source={item.image} />
        </ImageBackground>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {item.firstSlide && (
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.buttonCirleDisable}>
                <ICArrowLeft />
              </TouchableOpacity>
              <View style={{flex: 1}} />
              <TouchableOpacity style={styles.buttonCirleActive} onPress={() => slider.current.goToSlide(1, true)}>
                <ICArrowRight />
              </TouchableOpacity>
            </View>
          )}
          {item.secondSlide && (
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.buttonCirleActive} onPress={() => slider.current.goToSlide(0, true)}>
                <ICArrowLeft />
              </TouchableOpacity>
              <View style={{flex: 1}} />
              <TouchableOpacity style={styles.buttonCirleActive} onPress={() => slider.current.goToSlide(2, true)}>
                <ICArrowRight />
              </TouchableOpacity>
            </View>
          )}
          {item.lastSlide && (
            <View style={styles.buttonWrapperLast}>
              <ButtonOnBoard title="Daftar" type="primary" onPress={() => navigation.navigate('SignUp')} />
              <Gap width={15}/>
              <ButtonOnBoard title="Login" onPress={() => navigation.navigate('Login')} />
            </View>
          )}
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showNextButton={false}
        showPrevButton={false}
        showDoneButton={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={slides}
        ref={(ref) => (slider.current = ref)}
      />
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bgImage: {
    flex: 5,
    width: viewportWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipWrapper: {
    position: 'absolute',
    top: viewportHeight * 0.07,
    right: 20,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  skipText: {
    fontSize: 15,
    fontFamily: fonts.GilRoy.SemiBold,
    color: 'white',
  },
  image: {
    width: 270,
    height: 270
  },
  textWrapper: {
    flex: 3,
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.GilRoy.Bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.Nunito[400],
    color: colors.text.secondary,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 2,
    width: viewportWidth,
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  buttonWrapperLast: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  buttonCirleDisable: {
    backgroundColor: '#DCDFE3',
    width: 50,
    height: 50,
    borderRadius: 50/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCirleActive: {
    backgroundColor: colors.button.primary.background,
    width: 50,
    height: 50,
    borderRadius: 50/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    backgroundColor: colors.primaryFaded,
    justifyContent: 'flex-end',
    marginBottom: viewportHeight * 0.30,
  },
  activeDotStyle: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    justifyContent: 'flex-end',
    marginBottom: viewportHeight * 0.30,
  },
});