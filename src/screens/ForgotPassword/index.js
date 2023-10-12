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
import ApiRequest from '../../Services/ApiRequest'
const ForgotPassword = () => {
    const navigation = useNavigation()
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        email: '',
    });
    useEffect(() => {
        const isValid = data.email.trim() !==''
        setIsFormValid(isValid)
    }, [{...data}])

    const handleSubmit=async()=>{
        setIsLoading(true)
        try{
           const ApiData={
            type:'forgot_password',
            email:data.email
           }
           const res=await ApiRequest(ApiData)
           if (res.data.result===true){
            navigation.navigate('VerifyPass',{code:res.data.code})
           }
        }
        catch(error){
        console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }
    return (
        <Container customStyle={{ paddingHorizontal: 0 }}>
            <StatusBar barStyle={'dark-content'}
                backgroundColor={colors.white}
                animated={true} />
            <View style={style.box}>
                <Header showShadow={true} showBorderRadius={true} title={'Change Password'} />

                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Change Password</Text>
                        <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14, marginBottom: 20 }]}>Code has been send to your email</Text>

                  
                        <Text style={[style.lableStyle, { marginTop: 26 }]}>Email</Text>
                        <InputBox
                            notShow
                            placeholder={'Email'}
                            value={data.email}
                            onChangeText={text => {
                                setData({ ...data, email: text });
                            }}

                        />

                        <View style={style.buttonStyle}>
                            <Button
                                onPress={handleSubmit}
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

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    }

})