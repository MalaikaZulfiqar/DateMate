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
const BusinessSignup2 = () => {
  const navigation = useNavigation()
  const phoneInput = useRef(null);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    email: '',
    location: '',
    business_name: '',
    venue_type: '',
    synopsis: '',
    time: '',
    phone: ''

  });
  useEffect(() => {
    let checkValid = phoneInput.current?.isValidNumber(data.phone);
    setValid(checkValid);
  }, [data.phone]);
  return (
    <Container customStyle={{paddingHorizontal:0}}>
      <StatusBar barStyle={'dark-content'}
        backgroundColor={colors.white}
        animated={true} />
        <View style={style.box}>
      <Header showShadow={true} showBorderRadius={true} title={'Signup'} />
      
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
        <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Get Started</Text>
      <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14 }]}>Create an account to continue!</Text>
        <Text style={[style.lableStyle,{marginTop:26}]}>Business Name</Text>
            <InputBox
              notShow
              placeholder={'Business Name'}
              value={data.business_name}
              onChangeText={text => {
                setData({ ...data, business_name: text });
              }}

            />
            <Text style={[style.lableStyle]}>Business Description</Text>
              <InputBox
              notShow
              placeholder={'Business Description'}
              value={data.synopsis}
              onChangeText={text => {
                setData({ ...data, synopsis: text });
              }}
              multiline={true}
              numberOfLines={3}
              height={100}
            />
            <Text style={[style.lableStyle]}>Synopsis</Text>
            <InputBox
              notShow
              placeholder={'Synopsis'}
              value={data.synopsis}
              onChangeText={text => {
                setData({ ...data, synopsis: text });
              }}
              multiline={true}
              numberOfLines={3}
              height={100}
            />
            <Text style={[style.lableStyle]}>Opening Time</Text>
            <InputBox
              notShow
              placeholder={'Opening Time'}
              value={data.time}
              onChangeText={text => {
                setData({ ...data, time: text });
              }}

            />
          

         
          <View style={style.buttonStyle}>
            <Button
              onPress={() => navigation.navigate('BusinessPrice')}
              btnName={'Continue'}
              disabled={false}
              loading={false}
            />
          </View>
          <View>

            <TouchableOpacity
              style={{ marginTop: -4, marginBottom: 10 }}
              onPress={() => {
                navigation.navigate('Login');

              }}

            >
              <Text style={[{ textAlign: 'center' }]}>
                Already have an account?
                <Text
                  style={{
                    color: colors.primaryColor,
                    fontFamily: fonts.bold,
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
      </View>
    </Container>
  )
}

export default BusinessSignup2

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }

})