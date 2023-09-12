import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNavigationContainerRef } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();
export const isReadyRef = React.createRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name: name,
          state: {
            routes: [{ name: params }],
          },
        },
      ],
    })
  }
}

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      initialRouteName="AuthStack">

      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
};

export default Router;

