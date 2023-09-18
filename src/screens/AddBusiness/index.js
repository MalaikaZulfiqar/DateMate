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
const AddBusiness = () => {
  const navigation = useNavigation()
  const phoneInput = useRef(null);
  const [valid, setValid] = useState(false);
  const [data, setData] = useState({
    business_name: '',
    business_des: '',
    synopsis: '',
    open_time: '',
    close_time: ''

  });
  useEffect(() => {
    let checkValid = phoneInput.current?.isValidNumber(data.phone);
    setValid(checkValid);
  }, [data.phone]);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedField, setSelectedField] = useState(''); // To identify which field is being edited

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
  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <StatusBar barStyle={'dark-content'}
        backgroundColor={colors.white}
        animated={true} />
      <View style={style.box}>
        <Header title={'Add New Business'} />

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
            
            <TouchableOpacity onPress={() => showTimePicker('open_time')}>
              <View style={{marginBottom:15}}>
                <Text style={style.lableStyle}>Opening Time</Text>
                <TextInput
                 value={data.open_time}
                  style={[
                    styles.textInput,
                    { borderColor: data.open_time ? colors.primaryColor : '#E1E1E1' },
                  
                  ]}
                  placeholder={'Select Opening Time'}
                 
                  editable={false} // Set this to prevent direct editing
                />
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => showTimePicker('close_time')}>
            <View style={{marginBottom:15}}>
                <Text style={style.lableStyle}>Closing Time</Text>
                <TextInput
                 value={data.close_time}
                  style={[
                    styles.textInput,
                    { borderColor: data.close_time ? colors.primaryColor : '#E1E1E1' },
                  
                  ]}
                  placeholder={'Select Opening Time'}
                 
                  editable={false} // Set this to prevent direct editing
                />
              </View>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />


            <View style={style.buttonStyle}>
              <Button
                onPress={() => navigation.navigate('AuthStack', { screen: 'BusinessPrice' })}
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

export default AddBusiness

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
    marginLeft:12,
    marginRight:12,
    
  },

})