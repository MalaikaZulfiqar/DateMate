import { StyleSheet, Text, View, StatusBar, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { colors, fonts } from '../../constraints'
import InputBox from '../../components/InputBox'
import PhoneInput from 'react-native-phone-number-input'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { scale } from 'react-native-size-matters'
import Container from '../../components/Container'
import ApiRequest from '../../Services/ApiRequest'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage'
const CELL_COUNT = 4;
const VerifyAccount = () => {
    const [value, setValue] = useState('')
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue, });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isEyePressed, setEyePressed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const phoneInput = useRef(null);
    const [valid, setValid] = useState(false);
    const navigation = useNavigation()
    const route = useRoute()
    const { data,code } = route.params;
    const handleSubmit = async () => {
        setIsLoading(true)
        const role = await AsyncStorage.getItem('userRole');
        const enteredVerificationCode = value;
        if (enteredVerificationCode === code) {
            try {
                const ApiData = {
                    type: 'register',
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                    dob: data.doB,
                    lat: data.lat,
                    lng: data.lng,
                    user_type: role,
                    address: data.location

                }

                const res = await ApiRequest(ApiData)

                if (res.data.result == true) {
                    await AsyncStorage.setItem('userID', String(res.data.user_id));
                    ToastAndroid.showWithGravity(res.data.message, ToastAndroid.LONG, ToastAndroid.BOTTOM)
                    {
                        role == 'customer' ? navigation.navigate('Interest') : navigation.navigate('BusinessDetails')
                    }
                }
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        else {
            ToastAndroid.showWithGravity('Not verify', ToastAndroid.LONG, ToastAndroid.BOTTOM)
        }

    }
    return (
        <Container customStyle={{ paddingHorizontal: 0 }}>
            <StatusBar barStyle={'dark-content'}
                backgroundColor={colors.white}
                animated={true} />
            <View style={style.box}>
                <Header showShadow={true} showBorderRadius={true} title={'Verification'} />

                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Verify Your Account</Text>
                        <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14, marginBottom: 20 }]}>Verfication code has been send on your email</Text>
                        <View style={styles.container}>
                            <Text style={[style.subTitle, { color: colors.gray, fontSize: 14, marginBottom: 20 }]}>Please enter 4 digit code </Text>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={CELL_COUNT}
                                rootStyle={styles.codeFieldRoot}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <View

                                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                                        onLayout={getCellOnLayoutHandler(index)}
                                        key={index}
                                        style={[styles.cellRoot, isFocused && styles.focusCell]}>
                                        <Text style={styles.cellText}>
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    </View>
                                )}
                            />


                        </View>
                        <View style={style.buttonStyle}>
                            <Button
                                onPress={handleSubmit}
                                btnName={'Continue'}
                                disabled={isLoading|| !value}
                                loading={isLoading}
                            />
                        </View>

                    </ScrollView>
                </ScrollView>
            </View>
        </Container>
    )
}

export default VerifyAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verifyText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: colors.primaryColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    root: { padding: 20, minHeight: 300 },
    codeFieldRoot: {
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 80,
        paddingTop: 20
    },
    cellRoot: {
        width: scale(45),
        height: scale(55),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.softGray,
    },
    cellText: {
        color: colors.gray3,
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: colors.primaryColor,
        borderBottomWidth: 1,
    },
    label: {
        fontFamily: fonts.medium,
        fontSize: 12,
        color: colors.btnColor,
        marginBottom: 10,
    },

})