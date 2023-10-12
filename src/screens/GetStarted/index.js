import React from 'react';
import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';
import BaseButton from '../../components/BaseButton';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constraints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../../assets/css/style';

const GetStarted = () => {
  const navigation = useNavigation();
  const storeUserRole = async (role) => {
    try {
      await AsyncStorage.setItem('userRole', role);
    } catch (error) {
      console.error('Error storing user role:', error);
    }
  };

  return (

    <ImageBackground
      source={require('../../assets/images/png/heart.png')}
      style={styles.imageBackground}
      resizeMode="cover" // Ensure the image covers the entire space
    >
      <LinearGradient
        style={styles.container}
        start={{ x: 1, y: 1 }} end={{ x: 1, y: 0 }} colors={['#8D311E', 'rgba(141, 49, 30, 0.50)']}
      >
        <StatusBar barStyle={'light-content'} backgroundColor='rgba(141, 49, 30, 0.70)' />
        <View style={styles.infoCont}>
          <View style={styles.textContainer}>
            <Text style={[style.subTitle, styles.titleText]}>Welcome to DateMate</Text>
          </View>
          <Text style={[style.subTitle, styles.subTitletext]}>
            Interact with people with the same interest like you
          </Text>
          <View style={[styles.buttonContainer, { paddingBottom: 20 }]}>
            <BaseButton
              onPress={() => {
                storeUserRole('business');
                navigation.navigate('Login');
              }}
              buttonColor="white"
              textColor={colors.primaryColor}
              buttonText="Continue as Business"
            />
          </View>
          <View style={styles.buttonContainer}>
            <BaseButton
              onPress={() => {
                storeUserRole('customer');
                navigation.navigate('Login');
              }}
              buttonColor='#9C4B38'
              textColor="white"
              buttonText="Continue as Customer"
            />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>



  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: scale(28),
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,

  },
  infoCont: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 40,
    left: 0,
    right: 0,
    flex: 1,
  },
  subTitletext: {
    paddingHorizontal: 50,
    color: 'rgba(225,225,225,0.4)',
    fontSize: 14,
    textAlign: 'center',
    margin: 20,
    lineHeight: 21
  }
});
