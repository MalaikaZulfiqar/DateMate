import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity,ToastAndroid } from 'react-native'
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
import ApiRequest from '../../Services/ApiRequest'
const Login = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEyePressed, setEyePressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation()
  const [data, setData] = useState({
    email: '',
    password: '',

  });

  const onEyePress = () => {
    setEyePressed(!isEyePressed);
  };
  const handleLogin = async () => {
    setIsLoading(true)
   
    try{
      const ApiData={
        type:'login',
        email:data.email,
        password:data.password
      }
      const res=await ApiRequest(ApiData)
      await AsyncStorage.setItem('userID', String(res.data.user_id));
      await AsyncStorage.setItem('role',res.data.user_type)
      if(res.data.result===true){
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'AppStack',
              state: {
                routes: [{ name: res.data.user_type == 'customer' ? 'BookingBar' : 'HomeStack' }],
              },
            },
          ],
        })
      }
      else{
        ToastAndroid.showWithGravity(res.data.message, ToastAndroid.LONG, ToastAndroid.BOTTOM)
      }
      
    }
    catch(error){
       console.log(error)
    }
   finally{
    setIsLoading(false)
   }
  }
  const handleSignup = async () => {
    const role = await AsyncStorage.getItem('userRole');
    
      navigation.navigate('Signup')
    
  }
  useEffect(() => {
    checkFormValidity();
  }, [data]);

  const checkFormValidity = () => {
    const isValid = data.email.trim() !== '' && data.password.trim() !== '';
    setIsFormValid(isValid);
  };
  return (
    <>
      <Container customStyle={{ paddingHorizontal: 0 }}>
        <StatusBar barStyle={'dark-content'}
          backgroundColor={colors.white}
          animated={true} />

        <View style={style.box}>
          <Header showShadow={true} showBorderRadius={true} title={'Login'} />
          <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Get Started</Text>
          <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14 }]}>Login to your account</Text>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
            <ScrollView keyboardShouldPersistTaps={'handled'}>

              <Text style={[style.lableStyle, { marginTop: 26 }]}>Email</Text>
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



              <View style={style.buttonStyle}>
                <Button
                  onPress={handleLogin}
                  btnName={'Continue'}
                  disabled={isLoading || !isFormValid}
                  loading={isLoading}
                />
              </View>

              <View>

                <TouchableOpacity
                  style={{ marginTop: -4, marginBottom: 10 }}
                  onPress={()=>{navigation.navigate('ForgotPassword')}}

                >
                  <Text style={[{ textAlign: 'right' ,paddingHorizontal:18,color:colors.primaryColor}]}>
                    Forgot Password
                    
                  </Text>
                </TouchableOpacity>
              </View>

              <View>

                <TouchableOpacity
                  style={{ marginTop: -4, marginBottom: 10 }}
                  onPress={handleSignup}

                >
                  <Text style={[{ textAlign: 'center' }]}>
                    Don't have an account?
                    <Text
                      style={{
                        color: colors.primaryColor,
                        fontFamily: fonts.bold,
                        textAlign: 'center',
                      }}
                    >
                      {' '}
                      Signup
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      </Container>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }

})