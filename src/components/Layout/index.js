// React
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { colors } from '../../constraints';

export const Layout = ({ children, containerStyle }) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    alignItems: 'center',
  },
});

export default Layout;
