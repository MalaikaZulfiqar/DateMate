import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors, fonts } from '../../constraints'
import InputBox from '../../components/InputBox'
import PhoneInput from 'react-native-phone-number-input'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { scale } from 'react-native-size-matters'
import Container from '../../components/Container'
const BusinessSignup1 = () => {
  const navigation = useNavigation()
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEyePressed, setEyePressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const phoneInput = useRef(null);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    first_name:'',
    last_name:'',
    password:'',
    email: '',
    location: '',
    phone: ''

  });
  const onEyePress = () => {
    setEyePressed(!isEyePressed);
  };
  useEffect(() => {
    let checkValid = phoneInput.current?.isValidNumber(data.phone);
    setValid(checkValid);
  }, [data.phone]);

  useEffect(()=>{
   const isValid = 
   data.first_name.trim() !== '' &&
   data.last_name.trim() !== '' &&
   data.email.trim() !== '' &&
   data.password.trim() !== '' &&
   valid &&
   data.location.trim() !== '' 
   setIsFormValid(isValid)
  },[{...data},valid])
  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <StatusBar barStyle={'dark-content'}
        backgroundColor={colors.white}
        animated={true} />
      <View style={style.box}>
        <Header showShadow={true} showBorderRadius={true} title={'Signup'} />
        
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
          <ScrollView keyboardShouldPersistTaps={'handled'}>
          <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Get Started</Text>
        <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14 }]}>Create an account to continue!</Text>
          
              <Text style={[style.lableStyle, { marginTop: 26 }]}>First Name</Text>
              <InputBox
                notShow
                placeholder={'First name'}
                value={data.first_name}
                onChangeText={text => {
                  setData({ ...data, first_name: text });
                }}

              />
               <Text style={[style.lableStyle]}>Last Name</Text>
              <InputBox
                notShow
                placeholder={'Last Name'}
                value={data.last_name}
                onChangeText={text => {
                  setData({ ...data, last_name: text });
                }}

              />
              <Text style={[style.lableStyle]}>Email</Text>
              <InputBox
                notShow
                placeholder={'Email'}
                value={data.email}
                onChangeText={text => {
                  setData({ ...data, email: text });
                }}

              />
              <Text style={[style.lableStyle]}>Password</Text>
              <InputBox
                notShow
                placeholder={'Password'}
                value={data.password}
                onChangeText={text => {
                  setData({ ...data, password: text });
                }}
                secureTextEntry={isEyePressed ? false : true}
                isEye={true}
                onEyePress={onEyePress}

              />
               <Text style={[style.lableStyle]}>Location</Text>
              <View style={{ marginTop: 0, marginBottom: 13 }} >

                <GooglePlacesAutocomplete
                  placeholder='Location'
                  returnKeyType={'default'}
                  fetchDetails={true}
                  isRowScrollable={true}
                  keepResultsAfterBlur={false}
                  enablePoweredByContainer={false}
                  styles={{
                    textInputContainer: {
                      marginTop: 0,
                    },
                    textInput: {
                      height: scale(50),
                      borderRadius: 5,
                      marginBottom: 13,
                      paddingLeft: 30,
                      fontSize: 16,
                      color: colors.black,
                      fontFamily: fonts.regular,
                      backgroundColor: colors.inputColor,
                      flex: 1,
                      paddingRight: 45,
                      borderWidth: 1,
                      borderColor: data.location ? colors.primaryColor : '#E1E1E1',
                      marginLeft: 12,
                      marginRight: 16,
                    },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                    listView: {
                      position: 'relative',
                      zIndex: 3,
                      marginTop: 0,
                      padding: 0,
                      marginLeft: 12,
                      marginRight: 16,
                    },
                    row: {
                      backgroundColor: '#FFFFFF',
                      height: 40,
                      flexDirection: 'row',
                    },
                    separator: {
                      height: 0.5,
                      backgroundColor: '#c8c7cc',
                    },
                    description: {},
                    loader: {
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      height: 20,
                    },
                  }}
                  onPress={({ description }, details) => {
                    if (details) {
                      const { geometry } = details;
                      const { location } = geometry;

                      const latitude = location.lat;
                      const longitude = location.lng;

                      console.log('Latitude:', latitude);
                      console.log('Longitude:', longitude);
                      setData({ ...data, location: description })
                      //console.log(data.location)

                    }
                  }}
                  query={{
                    key: 'AIzaSyBqwk2I_l08r0RFRQSmOSqDj1Y5TIYCNO8',
                    language: 'en',
                  }}
                />
              </View>
              <Text style={[style.lableStyle]}>Phone</Text>

              <View style={{ borderRadius: 5, backgroundColor: '#F3F3F3', marginBottom: 20, marginLeft: 12, marginRight: 16 }}>
                <PhoneInput
                  value={data.phone}
                  ref={phoneInput}
                  defaultCode="CA"
                  defaultValue={data.phone}
                  textContainerStyle={{ backgroundColor: '#F3F3F3' }}
                  textInputStyle={{ padding: 0 }}
                  onChangeFormattedText={(text) => {
                    setData({ ...data, phone: text });
                  }}
                />
              </View>

         
            <View style={style.buttonStyle}>
              <Button
                onPress={() => navigation.navigate('BusinessDetails')}
                btnName={'Continue'}
                disabled={!isFormValid || isLoading}
                loading={isLoading}
              />
            </View>

          </ScrollView>
        </ScrollView>
      </View>
    </Container>
  )
}

export default BusinessSignup1

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10
  }

})