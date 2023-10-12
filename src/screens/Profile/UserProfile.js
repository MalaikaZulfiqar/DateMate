import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
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
import UploadPhoto from '../../components/UploadPhoto'
import { parsePhoneNumber } from 'libphonenumber-js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import ApiRequest,{ profile } from '../../Services/ApiRequest'
const UserProfile = () => {
  const navigation = useNavigation()
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEyePressed, setEyePressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const phoneInput = useRef(null);
  const [valid, setValid] = useState(false);
  const [img, SetImg] = useState({})
  const [data, setData] = useState(null)
  const [countryCode, setCountryCode] = useState('US');
  const fetchData = async () => {
    const userID = await AsyncStorage.getItem('userID');
    const response = await profile(userID);
    if (response.data) {
      const services = response.data;
      handleParsePhoneNumber(services[0].phone)
      setData({ ...services[0], image: services[0].url + services[0].image })
      ref.current?.setAddressText(services[0]?.location);

    }

  }

  useEffect(() => {
    fetchData();
  }, [])
  const selectImg = async () => {
    console.log(data)
    const result = await ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageQuality: 0.4,
      includeBase64: true,
    })
      .catch(() => {
        console.log('error');
      })
    if (result == undefined) {
      console.log('NO entry');
    } else {
      setData({ ...data, image: `data:${result.mime};base64,${result.data}` })
    }
  }
  useEffect(() => {
    if (data !== null) {
      let checkValid = phoneInput.current?.isValidNumber(data?.phone);
      const isValid =
        data?.name?.trim() !== '' &&
        data?.email?.trim() !== '' &&
        checkValid &&
        data?.location?.trim() !== '';
      setIsFormValid(isValid);
    }
  }, [{ ...data }]);
  const handlePress = async () => {
    const result = await AsyncStorage.getItem('userID');
    setIsLoading(true)
    try {
      const ApiData = {
        type: 'update_data',
        table_name: 'users',
        id : result,
        name :data?.name,
        email : data?.email,
        phone :data?.phone,
        location : data?.location,
        lat : data?.lat,
        lng :data?.lng,
        img : data?.image
      }
      const res = await ApiRequest(ApiData)
      console.log(ApiData)
      if (res.data.result==true) {
        console.log('updating')
        ToastAndroid.showWithGravity(res.message, ToastAndroid.LONG, ToastAndroid.BOTTOM)

      }
      else {
        ToastAndroid.showWithGravity('Profile cant be updated', ToastAndroid.LONG, ToastAndroid.BOTTOM)
      }

    } catch (error) {
         console.log('error: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleParsePhoneNumber = (arg) => {
    try {
      const parsedNumber = parsePhoneNumber(arg);
      setCountryCode(parsedNumber.country);
    } catch (error) {
      console.error('Invalid phone number:', error);
    }
  };
  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <StatusBar barStyle={'dark-content'}
        backgroundColor={colors.white}
        animated={true} />
      <View style={style.box}>
        <Header showShadow={true} showBorderRadius={true} title={'Profile'} />

        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
          <ScrollView keyboardShouldPersistTaps={'handled'}>
            <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Update Profile</Text>
            <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 13 }]}>Let's Update your Profile</Text>
            <View style={{ alignItems: 'center', marginBottom: scale(0) }}>

              <UploadPhoto
                onImageSelect={v => setData({ ...data, image: v })}
                isProfileImage={false}
                img={data?.image }
              />
            </View>
            <Text style={[style.lableStyle, { marginTop: 26 }]}>Name</Text>
            <InputBox
              notShow
              placeholder={'Name'}
              value={data?.name}
              onChangeText={text => {
                setData({ ...data, name: text });
              }}

            />

            <Text style={[style.lableStyle]}>Email</Text>
            <InputBox
              notShow
              placeholder={'Email'}
              value={data?.email}
              onChangeText={text => {
                setData({ ...data, email: text });
              }}

            />

            <Text style={[style.lableStyle]}>Location</Text>
            <View style={{ marginTop: 0, marginBottom: 13 }} >

              <GooglePlacesAutocomplete
                placeholder='Location'
                returnKeyType={'default'}
                fetchDetails={true}
                //currentLocation = {true}
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
                    borderColor: data?.location ? colors.primaryColor : '#E1E1E1',
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
                    setData({ ...data, location: description,lng: longitude, lat: latitude  })
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

            
            {
                data?.phone &&
                <View style={{ borderRadius: 5, backgroundColor: '#F3F3F3', marginBottom: 20, marginLeft: 12, marginRight: 16 }}>
                  <PhoneInput
                    value={data?.phone}
                    ref={phoneInput}
                    defaultCode={countryCode}
                    defaultValue={data?.phone}
                    disabled={true}
                    textContainerStyle={{ backgroundColor: '#F3F3F3' }}
                    textInputStyle={{ padding: 0 }}
                    onChangeFormattedText={(text) => {
                      setData({ ...data, phone: text })
                      //validatePhoneNumber(text);
                    }}

                  />
                </View>
              }
            


            <View style={style.buttonStyle}>
              <Button
                onPress={handlePress}
                btnName={'Update Profile'}
                disabled={isLoading || !isFormValid}
                loading={isLoading}
              />
            </View>

          </ScrollView>
        </ScrollView>
      </View>
    </Container>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10
  }

})