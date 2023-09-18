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
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
const VerifyAccount = () => {
    const [value, setValue] = useState('')
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue, });
    const navigation = useNavigation()
    const [isFormValid, setIsFormValid] = useState(false);
    const [isEyePressed, setEyePressed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const phoneInput = useRef(null);
    const [valid, setValid] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        location: '',
        password: '',
        phone: '',
        doB: ''

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
                <Header showShadow={true} showBorderRadius={true} title={'Verification'} />

                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>
                    <ScrollView keyboardShouldPersistTaps={'handled'}>
                        <Text style={[style.subTitle, { marginLeft: 10, marginTop: 10 }]}>Change Password</Text>
                        <Text style={[style.subTitle, { marginLeft: 10, color: colors.gray, fontSize: 14, marginBottom: 20 }]}>Let's change your password</Text>
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
                                onPress={() => navigation.navigate('ChangePassword')}
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
        backgroundColor: colors.btnColor,
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
        paddingHorizontal:20,
        marginBottom:80,
        paddingTop:20
    },
    cellRoot: {
        width: scale(45),
        height: scale(55),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.gray5,
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
        borderColor: colors.btnColor,
        borderBottomWidth: 1,
    },
    label: {
        fontFamily: fonts.medium,
        fontSize: 12,
        color: colors.btnColor,
        marginBottom: 10,
    },

})