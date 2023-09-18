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
const UserProfile = () => {
  const navigation = useNavigation()
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEyePressed, setEyePressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const phoneInput = useRef(null);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    name:'',
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
          
              <Text style={[style.lableStyle, { marginTop: 26 }]}>Name</Text>
              <InputBox
                notShow
                placeholder={'Name'}
                value={data.name}
                onChangeText={text => {
                  setData({ ...data, name: text });
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
                onPress={() => navigation.navigate('Profile')}
                btnName={'Continue'}
                disabled={false}
                loading={false}
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