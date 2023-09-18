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
const ForgotPassword = () => {
    const navigation = useNavigation()
    const [isFormValid, setIsFormValid] = useState(false);
    const [isEyePressed, setEyePressed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const phoneInput = useRef(null);
    const [valid, setValid] = useState(false);
    const [data, setData] = useState({
        phone: '',
    });
    const onEyePress = () => {
        setEyePressed(!isEyePressed);
    };
    useEffect(() => {
        let checkValid = phoneInput.current?.isValidNumber(data.phone);
        setValid(checkValid);
    }, [data.phone]);
    useEffect(()=>{
         const isValid=
         valid
         setIsFormValid(valid)
    },[])
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
                        <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14 ,marginBottom:20}]}>Let's change your password</Text>
                       
                        <Text style={[style.lableStyle]}>Phone</Text>
                        <View style={{ borderRadius: 5, backgroundColor: '#F3F3F3', marginBottom: 20, marginLeft: 12, marginRight: 16 ,flex:1}}>
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
                                onPress={() => navigation.navigate('VerifyAccount')}
                                btnName={'Continue'}
                                // disabled={!isFormValid || isLoading}
                                disabled={false}
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