import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';

import { LoadingIndicator } from './LoadingIndicator';
const Container = ({ children, customStyle, loading = false }) => {
  return (<>
    <View style={[styles.container, customStyle]}>{children}
    </View>
    {loading && <LoadingIndicator />}
  </>
  )
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS == 'ios' ? StatusBar.currentHeight : 0,
    paddingHorizontal: scale(20),
    paddingBottom:20,
    flexGrow:1
   
  },
});
