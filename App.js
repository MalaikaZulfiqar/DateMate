import { StyleSheet, Text, View,StatusBar } from 'react-native';
import React, { useEffect ,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router,{isReadyRef,navigate,navigationRef} from './src/navigations'
import BootSplash from "react-native-bootsplash";
//import { requestUserPermission, NotificationListner } from './src/utils/pushnotification_helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from './src/constraints';

const App = () => {
const [value,setValue]=useState('')
  useEffect(() => {
    const init = async () => {
      // requestUserPermission();
      // NotificationListner();
      // const user_id = await AsyncStorage.getItem('userID')
      // const role = await AsyncStorage.getItem('userRole')
      // if (user_id) {
      //   navigate('AppStack', role !== 'employee' ? 'HomeStack' : 'EmpStack');
      // }
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true, duration: 1500 });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        <Router />
      </NavigationContainer>
    
    </GestureHandlerRootView>

  );
};

export default App;

const styles = StyleSheet.create({});
