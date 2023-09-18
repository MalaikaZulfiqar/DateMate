import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/HomeScreen";
import Booking from "../screens/Booking";
import UserAccount from "../screens/Profile";
import CustomerHome from "../screens/CustomerHome";
import colors from '../constraints/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Restaurant from '../screens/Restaurant'
import MapWithMarkers from "../screens/Maps";
import {Image, View} from 'react-native'
const Tab=createBottomTabNavigator()

const BookingBar =()=>{
    return (
      <View style={{flex:1,backgroundColor: '#FFFFFF',}}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarActiveTintColor: colors.primaryColor,
            tabBarInactiveTintColor: '#8D311E',
            tabBarStyle: {
              height: 65,
              //width:355,
              paddingBottom: 5,
              borderTopLeftRadius:20,
              borderTopRightRadius:20
             
            },
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
             // fontFamily: fonts.medium,
              top: -4,
            },
            tabBarHideOnKeyboard: true,
          })}>
          <Tab.Screen
            name="Home"
            component={CustomerHome}
            options={{
             
                tabBarIcon: ({focused}) => (
                  <Icon
                    name="home"
                    color={focused ? colors.primaryColor : '#B7B7B7'}
                    size={25}
                  />
                ),
                tabBarActiveTintColor:'#8D311E',
                tabBarInactiveTintColor:'#A1A1A1',
              }}
          />
          <Tab.Screen
            name="Booking"
            component={Booking}
            options={{
                tabBarIcon: ({focused}) => (
                  // <Icon
                  //   name="book"
                  //   color={focused ? colors.primaryColor : '#B7B7B7'}
                  //   size={25}
                  // />
                  <Image source={require('../assets/images/png/appt.png')} style={{height:25,width:25}}
                  tintColor={focused ? colors.primaryColor : '#B7B7B7'}
                  
                  />
                ),
                tabBarActiveTintColor:'#8D311E',
                tabBarInactiveTintColor:'#A1A1A1',
              }}
          />
          <Tab.Screen
            name="Favorite"
            component={Restaurant}
            options={{
                tabBarIcon: ({focused}) => (
                  <Icon
                    name="heart"
                    color={focused ? colors.primaryColor : '#B7B7B7'}
                    size={25}
                  />
                ),
                tabBarActiveTintColor:'#8D311E',
                tabBarInactiveTintColor:'#A1A1A1',
              }}
          />
           <Tab.Screen
            name="Maps"
            component={MapWithMarkers}
            options={{
                tabBarIcon: ({focused}) => (
                  <IconMaterialCommunity
                    name="google-maps"
                    color={focused ? colors.primaryColor : '#B7B7B7'}
                    size={25}
                  />
                ),
                tabBarActiveTintColor:'#8D311E',
                tabBarInactiveTintColor:'#A1A1A1',
              }}
          />
          <Tab.Screen
            name="Profile"
            component={UserAccount}
            options={{
                tabBarIcon: ({focused}) => (
                  <Icon
                    name="user"
                    color={focused ? colors.primaryColor : '#B7B7B7'}
                    size={25}
                  />
                ),
                tabBarActiveTintColor:'#8D311E',
                tabBarInactiveTintColor:'#A1A1A1',
              }}
          />
        </Tab.Navigator>
        </View>
      );
}

export default BookingBar;