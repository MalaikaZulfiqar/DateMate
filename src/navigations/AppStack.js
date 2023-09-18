import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomBar from './BottomNavigation'
import BookingBar from './BookingNavigation';
import HotelDetail from '../screens/HotelDetail';
import TableBooking from '../screens/Table Booking';
import Success from '../screens/Success';
import BookingDetail from '../screens/BookingDetail';
import UserProfile from '../screens/Profile/UserProfile';
import Terms_Condition from '../screens/Profile/Terms_Condition'
import My_Business from '../screens/Profile/My_Business'
import MyBusinessDetail from '../screens/MyBusinessDetail';
import AddBusiness from '../screens/AddBusiness';
import AllBusiness from '../screens/AllBusiness';
import AllInterest from '../screens/AllInterest';
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
                 <Stack.Screen name='UserProfile' component={UserProfile}/>
                 <Stack.Screen name='Terms_Condition' component={Terms_Condition}/>
                 <Stack.Screen name='My_Business' component={My_Business}/>
                 <Stack.Screen name='MyBusinessDetail' component={MyBusinessDetail}/>
                 <Stack.Screen name='AddBusiness' component={AddBusiness}/>
                 <Stack.Screen name='AllBusiness' component={AllBusiness}/>
                 <Stack.Screen name='AllInterest' component={AllInterest}/>
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
