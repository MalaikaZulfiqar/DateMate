import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/LoginScreen';
import Onboarding from '../screens/Onboarding';
import GetStarted from '../screens/GetStarted';
import BottomBar from './BottomNavigation'
import ChooseGender from '../screens/ChooseGender';
import UploadImg from '../screens/UploadImage';
import Premium from '../screens/Premium';
import Interest from '../screens/Interest';
import BookingBar from './BookingNavigation';
import Signup from '../screens/Signup';
import Ditary from '../screens/Ditary';
import HealthStatus from '../screens/Health Status';
import BusinessPrice from '../screens/Business Prices';
import BusinessDetails from '../screens/BusinessDetails';
import HotelDetail from '../screens/HotelDetail';
import ForgotPassword from '../screens/ForgotPassword';
import VerifyAccount from '../screens/VerifyAccount';
import ChangePassword from '../screens/ChangePassword';
import VerifyPass from '../screens/VerifyPass';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
            initialRouteName="GetStarted" >
            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='GetStarted' component={GetStarted} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='ChooseGender' component={ChooseGender}/>
            <Stack.Screen name='UploadImg' component={UploadImg}/>
            <Stack.Screen name='Premium' component={Premium}/>
            <Stack.Screen name='Interest' component={Interest}/>
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Ditary' component={Ditary} />
            <Stack.Screen name='HealthStatus' component={HealthStatus} />
            <Stack.Screen name='BusinessPrice' component={BusinessPrice} />
            <Stack.Screen name='BusinessDetails' component={BusinessDetails} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='VerifyAccount' component={VerifyAccount} />
            <Stack.Screen name='ChangePassword' component={ChangePassword} />
            <Stack.Screen name='VerifyPass' component={VerifyPass} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
