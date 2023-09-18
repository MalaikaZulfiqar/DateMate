import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/HomeScreen";
import Booking from '../screens/BusninessBooking'
import AddBusiness from "../screens/AddBusiness";
import MyBusiness from "../screens/MyBusiness";
import Profile from "../screens/Profile";
import HomeSvg from "../components/HomeSvg";
import BookingSvg from "../components/BookingSvg";
import BusinessSvg from "../components/BusinessSvg";
import ProfileSvg from "../components/ProfileSvg";
import colors from '../constraints/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import { Image, View } from "react-native";
const Tab=createBottomTabNavigator()

const BottomBar =()=>{
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
            component={Home}
            options={{
              tabBarIcon: ({focused}) => <HomeSvg focused={focused} />,
              tabBarActiveTintColor:'#8D311E',
              tabBarInactiveTintColor:'#A1A1A1'
            }}
          />
          <Tab.Screen
            name="Booking"
            component={Booking}
            options={{
              tabBarIcon: ({focused}) => (
                <Image source={require('../assets/images/png/appt.png')} style={{height:25,width:25}}
                  tintColor={focused ? colors.primaryColor : '#B7B7B7'}
                  
                  />
              ),
              tabBarActiveTintColor:'#8D311E',
              tabBarInactiveTintColor:'#A1A1A1',
            }}
          />
          <Tab.Screen
            name="Add Bus.."
            component={AddBusiness}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon3
                  name="add"
                  color={focused ? colors.primaryColor : '#B7B7B7'}
                  size={25}
                />
              ),
              tabBarActiveTintColor:'#8D311E',
              tabBarInactiveTintColor:'#A1A1A1',
            }}
          />
           <Tab.Screen
            name="My Bus.."
            component={MyBusiness}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon2
                  name="torso-business"
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
            component={Profile}
            options={{
              tabBarIcon: ({focused}) => <ProfileSvg focused={focused} />,
              tabBarActiveTintColor:'#8D311E',
              tabBarInactiveTintColor:'#A1A1A1'
            }}
          />
        </Tab.Navigator>
        </View>
      );
}

export default BottomBar;