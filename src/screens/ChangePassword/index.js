import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors, fonts } from '../../constraints'
import InputBox from '../../components/InputBox'
import { scale } from 'react-native-size-matters'
import Container from '../../components/Container'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AxiosHeaders } from 'axios'
import ApiRequest from '../../Services/ApiRequest'
const ChangePassword = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEyePressed, setEyePressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation()
  const [data, setData] = useState({
    new_password: '',
    con_password: '',

  });
  const onEyePress = () => {
    setEyePressed(!isEyePressed);
  };
  const handleLogin = async () => {
    const id=await AsyncStorage.getItem('userID')
     try{
      setIsLoading(true)
      const ApiData={
       type:'update_password',
       password:data.new_password,
       user_id:id      
      }
      if (data.new_password===data.con_password){
        const res=await ApiRequest(ApiData)
        if (res.data.result===true){
          navigation.navigate('Login');
        }
        else{
          ToastAndroid.show('Verification failed', ToastAndroid.LONG, ToastAndroid.BOTTOM);
        }
        
      }
      else{
        ToastAndroid.show('Passwords do not match', ToastAndroid.LONG, ToastAndroid.BOTTOM);
      }
      
     }
     catch(error){
      console.log(error)
     }
     finally{
      setIsLoading(false)
     }
    
  }
  useEffect(()=>{
    const isValid=
    data.new_password.trim() !== '' &&
    data.con_password.trim() !== '' 
    setIsFormValid(isValid)
  })

  return (
    <>
      <Container customStyle={{ paddingHorizontal: 0 }}>
        <StatusBar barStyle={'dark-content'}
          backgroundColor={colors.white}
          animated={true} />

        <View style={style.box}>
          <Header showShadow={true} showBorderRadius={true} title={'Update Password'} />
          <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Update Password</Text>
          <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14 }]}>Let's Update Password</Text>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <ScrollView keyboardShouldPersistTaps={'handled'}>
              <Text style={[style.lableStyle,{marginTop:10}]}>New Password</Text>
              <InputBox
                notShow
                placeholder={'New Password'}
                value={data.new_password}
                onChangeText={text => {
                  setData({ ...data, new_password: text });
                }}
                secureTextEntry={isEyePressed ? false : true}
                isEye={true}
                onEyePress={onEyePress}

              />
               <Text style={[style.lableStyle]}>Confirm Password</Text>
              <InputBox
                notShow
                placeholder={'Confirm Password'}
                value={data.con_password}
                onChangeText={text => {
                  setData({ ...data, con_password: text });
                }}
                secureTextEntry={ true}
                

              />
              <View style={style.buttonStyle}>
                <Button
                  onPress={handleLogin}
                  btnName={'Continue'}
                  disabled={!isFormValid || isLoading}
                  loading={isLoading}
                />
              </View>

            </ScrollView>
          </ScrollView>
        </View>
      </Container>
    </>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }

})