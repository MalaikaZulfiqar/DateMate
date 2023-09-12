import React from 'react';
import { ImageBackground, StyleSheet, Text, View,StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';
import BaseButton from '../../components/BaseButton';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constraints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../../assets/css/style'
const GetStarted = () => {
  const navigation = useNavigation();
  const storeUserRole = async (role) => {
    try {
      await AsyncStorage.setItem('userRole', role);
    } 
    catch (error) {
      console.error('Error storing user role:', error);
    }
  };
  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 1, y: 1 }} end={{ x: 1, y: 0 }} colors={['red', '#8D311E', '#8D311E']}
    >
      <StatusBar barStyle={'light-content'} backgroundColor='transparent'/>
      <ImageBackground
        source={require('../../assets/images/png/heart.png')}
        style={styles.imageBackground}
      >
        <View style={styles.textContainer}>
          <Text style={[style.subTitle,styles.titleText]}>Welcome to DateMate</Text>
        </View>
        <Text style={[style.subTitle,{paddingHorizontal:50,color:'white',fontSize:14,textAlign:'center',margin:20}]}>
        Interact with people with the same interest like you
            </Text>
        <View style={styles.buttonContainer}>
          <BaseButton
            onPress={() => { 
            storeUserRole('business')
            navigation.navigate('Login') }}
            buttonColor="white"
            textColor={colors.primaryColor}
            buttonText="Continue as Busniness"
          />
         
        </View>
        <View style={styles.buttonContainer}>
         
          <BaseButton
            onPress={() => { 
              storeUserRole('customer')
              navigation.navigate('Login') }}
            buttonColor={colors.primaryColor}
            textColor="white"
            buttonText="Continue as Customer"
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: 'red', 
    opacity:0.6
  },
  textContainer: {
    marginTop: scale(370),
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
    marginRight:30,
    marginTop:20
  },
});
