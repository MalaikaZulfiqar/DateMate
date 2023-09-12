import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/LoginScreen';
import Onboarding from '../screens/Onboarding';
import GetStarted from '../screens/GetStarted';
import Signup from '../screens/SignupScreen';
import BottomBar from './BottomNavigation'
import BookingBar from './BookingNavigation';
import HotelDetail from '../screens/HotelDetail';
import TableBooking from '../screens/Table Booking';
import Success from '../screens/Success';
import BookingDetail from '../screens/BookingDetail';
const Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
            initialRouteName="BookingBar" >
                 <Stack.Screen name='HomeStack' component={BottomBar} />
                 <Stack.Screen name='BookingBar' component={BookingBar}/>
                 <Stack.Screen name='HotelDetail' component={HotelDetail}/>
                 <Stack.Screen name='TableBooking' component={TableBooking}/>
                 <Stack.Screen name='Success' component={Success}/>
                 <Stack.Screen name='BookingDetail' component={BookingDetail}/>
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
