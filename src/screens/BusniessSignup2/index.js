import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
const BusinessSignup2 = () => {
  const navigation = useNavigation()
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedField, setSelectedField] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [data, setData] = useState({
    business_name: '',
    business_des: '',
    synopsis: '',
    open_time: '',
    close_time: ''

  });


  const showTimePicker = (field) => {
    setSelectedField(field);
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (time) => {
    hideTimePicker();
    // Format the selected time (you can adjust the format as needed)
    const formattedTime = format(time, 'hh:mm a');

    // Set the selected time based on the field being edited
    if (selectedField === 'open_time') {
      setData({ ...data, open_time: formattedTime });
    } else if (selectedField === 'close_time') {
      setData({ ...data, close_time: formattedTime });
    }
  };
  
  useEffect(()=>{
    const isValid=
    data.business_name.trim() !== ''&&
    data.business_des.trim() !== ''&&
    data.synopsis.trim() !== '' &&
    data.open_time.trim() !== '' &&
    data.close_time.trim() !== '';
    setIsFormValid(isValid)
  },[{...data}])
  
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
            <Text style={[style.lableStyle, { marginTop: 26 }]}>Business Name</Text>
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
              value={data.business_des}
              onChangeText={text => {
                setData({ ...data, business_des: text });
              }}
              multiline={true}
              numberOfLines={3}
              customInputStyle={{ paddingBottom: 30, paddingTop: 0 }}
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
              //height={100}
              customInputStyle={{ paddingBottom: 30, paddingTop: 0 }}
            />
            <View style={{ marginBottom: 15 }}>
              <Text style={style.lableStyle}>Opening Time</Text>
              <TouchableOpacity onPress={() => showTimePicker('open_time')}>
                <TextInput
                  value={data.open_time}
                  style={[
                    styles.textInput,
                    { borderColor: data.open_time ? colors.primaryColor : '#E1E1E1' },

                  ]}
                  placeholder={'Select Opening Time'}

                  editable={false} 
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text style={style.lableStyle}>Closing Time</Text>
              <TouchableOpacity onPress={() => showTimePicker('close_time')}>
                <TextInput
                  value={data.close_time}
                  style={[
                    styles.textInput,
                    { borderColor: data.close_time ? colors.primaryColor : '#E1E1E1' },

                  ]}
                  placeholder={'Select Opening Time'}

                  editable={false} // Set this to prevent direct editing
                />
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
            <View style={style.buttonStyle}>
              <Button
                onPress={() => navigation.navigate('BusinessPrice')}
                btnName={'Continue'}
                disabled={!isFormValid || isLoading}
                loading={isLoading}
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
  },
  textInput: {
    height: scale(50),
    borderRadius: 5,
    marginBottom: 13,
    paddingLeft: 25,
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.regular,
    backgroundColor: colors.inputColor,
    flex: 1,
    paddingRight: 45,
    borderWidth: 1,
    marginLeft: 12,
    marginRight: 12,

  },

})