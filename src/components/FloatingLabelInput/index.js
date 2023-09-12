import { StyleSheet, TextInput, View, Text, Platform } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../constraints';

const AppTextInput = ({
  placeholder,
  placeholderTextColor = colors.neutralDarkThree,
  keyboardType = 'default',
  titleText,
  text,
  onChangeText,
  onChange,
  secureTextEntry,
  containerStyles,
  value,
  multiline = false,
  otherPops,
  editable = true,
  onSubmitEditing = () => ""
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  // isFocused ? 'yellow' : 'white';
  return (
    <View
      style={[
        styles.container,
        containerStyles,
        isFocused ? { borderBottomColor: colors.primaryColor } : {},
      ]}>
      <Text style={{ paddingLeft: -2 }}>{titleText}</Text>
      <TextInput
        editable={editable}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        onSubmitEditing={onSubmitEditing}

        multiline={multiline}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInput, containerStyles]}
        {...otherPops}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    //backgroundColor:"red",
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.neutralDarkNine,
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
    paddingTop: Platform.OS === 'ios' ? 5 : 0
  },
  textInput: {
    // padding: 5,
    fontSize: 16,
    // width: deviceWidth - 30,
    color: colors.white,
    // backgroundColor: 'red',
    paddingLeft: -4,
    width: '100%',
  },
});
