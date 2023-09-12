import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import { scale } from 'react-native-size-matters';
import { Image } from 'react-native';
import BaseButton from '../../components/BaseButton';
import { colors } from '../../constraints';
const Onboarding = ({ navigation }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const handleSwipe = (index) => {
    setSwiperIndex(index);
  };

  const handleNext = () => {
    if (swiperIndex === 2) {

      navigation.navigate('GetStarted');
    } else {

      handleSwipe(swiperIndex + 1);
    }
  };


  const handleSkip = () => {

    navigation.navigate('GetStarted');
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <Swiper
        loop={false}
        showsPagination={false}
        onIndexChanged={(index) => handleSwipe(index)}
        index={swiperIndex}
      >
        <View style={{ marginTop: 90 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Image source={require('../../assets/images/png/couple-day-restaurant.png')} />
            <Image source={require('../../assets/images/png/chicken-steak.png')} style={{ marginLeft: -20 }} />

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5 }}>
            <Image source={require('../../assets/images/png/bouquet.png')} />
            <Image source={require('../../assets/images/png/pexels.png')} style={{ marginLeft: -20 }} />

          </View>
          <Text style={[styles.mainHeading, { color: colors.black }]}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text style={[styles.subtitle, { color: colors.gray }]}>
            This is a multiline subtitle that can span multiple lines as needed.
          </Text>
          <View>


            <Image source={require('../../assets/images/png/grp.png')} style={{ alignSelf: 'center' }} />
          </View>
          <View style={styles.buttonContainer}>
            <BaseButton
              onPress={handleNext}
              buttonColor={colors.primaryColor}
              textColor="white"
              buttonText="Continue"
            />

          </View>
          <View style={styles.buttonContainer}>

            <BaseButton
              onPress={handleSkip}
              buttonColor="#F4EAE8"
              textColor={colors.primaryColor}
              buttonText="Skip"

            />
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/png/couple.png')}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.mainHeading}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
            <Text style={styles.subtitle}>
              This is a multiline subtitle that can span multiple lines as needed.
            </Text>
            <View>


              <Image source={require('../../assets/images/png/indicator.png')} style={{ alignSelf: 'center' }} />
            </View>
            <TouchableOpacity

              onPress={handleNext}
            >
              <View style={styles.centeredImageContainer}>
                <Image
                  source={require('../../assets/images/png/Group.png')}
                  style={styles.smallImage}
                />
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/png/drinks.png')}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.mainHeading}>
              Lorem ipsum dolor sit amet, consectetur
            </Text>
            <Text style={styles.subtitle}>
              This is a multiline subtitle that can span multiple lines as needed.
            </Text>
            <View>


              <Image source={require('../../assets/images/png/indicator.png')} style={{ height: 5, alignSelf: 'center' }} />
            </View>
            <TouchableOpacity

              onPress={handleNext}
            >
              <View style={styles.centeredImageContainer}>
                <Image
                  source={require('../../assets/images/png/Group2.png')}
                  style={{ width: 90, height: 90, marginTop: 15 }}
                />
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipButton: {
    padding: 10,
    marginLeft: 20,
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginRight: 20,
  },
  bottomContainer: {
    backgroundColor: '#8D311E',
    paddingHorizontal: scale(30),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: scale(-50),
  },
  mainHeading: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(8),
    textAlign: 'center',
    margin: scale(40),
  },
  subtitle: {
    color: 'white',
    fontSize: scale(14),
    textAlign: 'center',
    margin: scale(15),
  },
  smallImage: {
    width: 120,
    height: 120,
  },
  centeredImageContainer: {
    alignItems: 'center',
    marginBottom: scale(50),
  },
  image: {
    marginTop: 60,
    marginLeft: 18,
    marginRight: 12,
    zIndex: -1,
  },
  nextButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20
  },
});
