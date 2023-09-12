import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import style from '../../assets/css/style';
import { colors } from '../../constraints';
import BottomBar from '../../navigations/BottomNavigation';
import { useNavigation } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import Container from '../../components/Container';
import Header from '../../components/Header';
const Success = () => {
  const navigation = useNavigation();

  return (
    
    
    <Container >
    <StatusBar barStyle={'dark-content'} backgroundColor={colors.white}/>
   
    <View style={{ alignItems: 'center',justifyContent: 'center',marginTop:scale(150)}}>
      <Image
        source={require('../../assets/images/png/fireworks.png')}
        style={styles.image}
      />
      <Text style={[style.subTitle, styles.titleText]}>Congrats</Text>
      <Text style={styles.subtitle}>Your Booking is completed. We assure you will like it.</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'BookingBar',
                state: {
                  routes: [{ name: 'Home' }],
                },
              },
            ],
          });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
      </View>
    </Container>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    height: 120,
    width: 120,
    tintColor: colors.primaryColor,
    alignSelf:'center'
   
  },
  titleText: {
    marginBottom: 10,
  },
  subtitle: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    marginBottom:50,
    margin:30
  },
  button: {
    borderRadius: 5,
    borderColor: colors.primaryColor,
    borderWidth: 1,
    width: scale(280),
  },
  buttonText: {
    color: colors.primaryColor,
    textAlign: 'center',
    padding: 12,
  },
});

export default Success;
