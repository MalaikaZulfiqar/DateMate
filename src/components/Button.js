import React from 'react';
import { Pressable, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../constraints'
import { scale } from 'react-native-size-matters';
const Button = ({
  onPress,
  btnName,
  disabled,
  loading,
  customStyle,
  customText,
  style
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.btn,
        { backgroundColor: disabled ? colors.gray : colors.primaryColor },
        customStyle,
      ]}
      onPress={onPress}>
      {loading && <ActivityIndicator size={25} color={'#fff'} />}
      {!loading && <Text style={[styles.btnText, customText]}>{btnName}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    height: scale(49),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'

  },
  btnText: {
    color: 'white',
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});
