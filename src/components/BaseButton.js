import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { fonts } from '../constraints';
const BaseButton = ({ onPress, buttonColor, textColor, buttonText }) => {
  const buttonStyles = [
    styles.btn,
    {
      backgroundColor: buttonColor  
    },
  ];

  const textStyles = [
    styles.btnText,
    {
      color: textColor  
    },
  ];

  return (
    <TouchableOpacity  onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 32,
    height: scale(49),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    fontFamily:'700',
    fontStyle:'normal',
   
  },
});
