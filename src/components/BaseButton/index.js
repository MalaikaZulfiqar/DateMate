// React
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import style from '../../assets/css/style';
import { colors } from '../../constraints';

export const BaseButton = ({
  title,
  onPress = () => '',
  disabled = false,
  icon,
  textStyle,
  defaultStyle,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[
        styles.default,
        defaultStyle,
        style.justify,
        { ...defaultStyle, ...style },
        disabled ? { backgroundColor: colors.neutralDarkSeven } : {},
      ]}>
     
      {icon ? icon : null}
      {!loading ? (
        <Text
          style={[
            styles.title,
            textStyle,
            disabled ? { color: colors.neutralDarkFour } : {},
          ]}>
          {title}
        </Text>
      ) : (
        <ActivityIndicator color={'#fff'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
});
