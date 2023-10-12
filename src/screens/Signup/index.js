import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
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
import emailValidator from 'email-validator'
import ApiRequest from '../../Services/ApiRequest'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Cross from '../../assets/images/svg/cross.svg'
import Tick from '../../assets/images/svg/tick.svg'
const Signup = () => {
    const navigation = useNavigation()
    const [isFormValid, setIsFormValid] = useState(false);
    const [isEyePressed, setEyePressed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const phoneInput = useRef(null);
    const [valid, setValid] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [checkMarkEmail, setcheckMarkEmail] = useState(false);
    const [checkMarkName, setcheckMarkName] = useState(false);
    const [checkMarkPhone, setcheckMarkPhone] = useState(false)
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [data, setData] = useState({
        name: '',
        email: '',
        location: '',
        password: '',
        phone: '',
        doB: '',
        lat: '',
        lng: '',
        user_type: ''

    });
    const onEyePress = () => {
        setEyePressed(!isEyePressed);
    };
    // useEffect(() => {
    //     let checkValid = phoneInput.current?.isValidNumber(data.phone);
    //     setValid(checkValid);
    // }, [data.phone]);

    const showTimePicker = (field) => {
        setSelectedField(field);
        setTimePickerVisible(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisible(false);
    };

    const handleDateConfirm = (date) => {
        hideTimePicker();
        const formattedDate = format(date, 'dd/MM/yyyy');
        if (selectedField === 'doB') {
            setData({ ...data, doB: formattedDate });
        }
    };


    useEffect(() => {
        const isValid =
            data.name.trim() !== '' &&
            data.email.trim() !== '' &&
            data.location.trim() !== '' &&
            data.password.trim() !== '' &&
            valid &&
            data.doB.trim() !== '';
        setIsFormValid(isValid);
    }, [{ ...data }, valid]);

    const check_email = async (text) => {
        if (validateEmail(text)) return
        try {
            const ApiData = {
                type: 'check_email',
                email: text
            }
            const res = await ApiRequest(ApiData);
        
            if (res.data.result === true) {
                setcheckMarkEmail(true)
                console.log(res.data.message)
            }
            else {
                setcheckMarkEmail(false)
               
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const check_phone = async (text) => {
        if (checkValidPhone(text)) return
        try {
            const ApiData = {
                type: 'check_phone',
                phone: text
            }
            const res = await ApiRequest(ApiData);
            console.log(res.data)
            if (res.data.result === true) {
               
                setcheckMarkPhone(true)
            }
            else {
                setcheckMarkPhone(false)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleSignup = async () => {
        setIsLoading(true)
        const role = await AsyncStorage.getItem('userRole');
        setIsLoading(true)
        try{
           const ApiData={
            type:'forgot_password',
            email:data.email
           }
           const res=await ApiRequest(ApiData)
           if (res.data.result===true){
            navigation.navigate('VerifyAccount',{data:data,code:res.data.code})
           }
           else{
            console.log(res.data.message)
           }
        }
        catch(error){
        console.log(error)
        }
        finally{
            setIsLoading(false)
        }
    }
    const checkValidPhone = (phone) => {
        let checkValid = phoneInput.current?.isValidNumber(phone);
        setValid(checkValid);
    }
    const validateEmail = (email) => {
        setIsValidEmail(emailValidator.validate(email));
    };
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

                        <Text style={[style.lableStyle, { marginTop: 26 }]}>Name</Text>
                        <InputBox
                            notShow
                            placeholder={'Name'}
                            value={data.name}
                            onChangeText={text => {
                                setData({ ...data, name: text });

                            }}

                        />
                        <View style={{ marginBottom: 15 }}>
                            <Text style={[style.lableStyle]}>Email</Text>
                            <TextInput
                                notShow
                                placeholder={'Email'}
                                value={data.email}
                                onChangeText={text => {
                                    setData({ ...data, email: text });
                                    check_email(text)
                                    validateEmail(text)

                                }}
                                style={[
                                    styles.textInput,
                                    { borderColor: data.email ? colors.primaryColor : '#E1E1E1' },

                                ]}

                            />
                            {!data.email ? null : (checkMarkEmail && isValidEmail) ? (
                                <Image source={require('../../assets/images/png/checkmark.png')} style={styles.leftIconBox} />
                            ) : (
                                <Image source={require('../../assets/images/png/cancel.png')} style={styles.leftIconBox} />
                            )}
                        </View>
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
                        <View style={{ marginBottom: 15 }}>
                            <Text style={style.lableStyle}>Date of Birth</Text>
                            <TouchableOpacity onPress={() => showTimePicker('doB')}>
                                <TextInput
                                    value={data.doB}
                                    style={[
                                        styles.textInput,
                                        { borderColor: data.doB ? colors.primaryColor : '#E1E1E1' },

                                    ]}
                                    placeholder={'Date of Birth'}

                                    editable={false} // Set this to prevent direct editing
                                />
                            </TouchableOpacity>
                        </View>
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
                                        setData({ ...data, location: description, lng: longitude, lat: latitude })
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
                                    check_phone(text)
                                    checkValidPhone(text)

                                }}
                            />
                            {!data.phone ? null : (checkMarkPhone && valid) ? (
                                <Image source={require('../../assets/images/png/checkmark.png')}style={[styles.leftIconBox,{top:18,right:10}]} />
                            ) : (
                                <Image source={require('../../assets/images/png/cancel.png')} style={[styles.leftIconBox,{top:18,right:10}]} />
                            )}
                        </View>
                        <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="date"
                            onConfirm={handleDateConfirm}
                            onCancel={hideTimePicker}
                        />

                        <View style={style.buttonStyle}>
                            <Button
                                onPress={handleSignup}
                                btnName={'Continue'}
                                disabled={!isFormValid || isLoading || !checkMarkEmail || !checkMarkPhone}
                                loading={isLoading}
                            />
                        </View>
                        <View>

                            <TouchableOpacity
                                style={{ marginTop: -4, marginBottom: 10 }}
                                onPress={() => {
                                    navigation.navigate('Login');
                                }} >
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

export default Signup

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
    leftIconBox: {
        position: 'absolute',
        zIndex: 1,
        right: 18,
        top: 35,
        height: scale(20),
        width:scale(20)
    },

})