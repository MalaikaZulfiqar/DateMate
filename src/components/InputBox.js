import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { colors, fonts } from '../constraints';
import Tick from '../assets/images/svg/tick.svg';
import Cross from '../assets/images/svg/cross.svg';
import Feather from 'react-native-vector-icons/Feather';
const InputBox = ({
  Icon,
  error,
  onChangeText,
  value,
  placeholder,
  errorDisc,
  KT,
  editable,
  customStyle,
  customInputStyle,
  isEye,
  secureTextEntry,
  onEyePress,
  check,
  notShow,
  multiline,
  numberOfLines,
  height
}) => {
  return (
    <View style={styles.inputBox}>
     
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.textInput,
          { borderColor: value ? colors.primaryColor : '#E1E1E1' },
          customInputStyle,
        ]}
        keyboardType={KT ? KT : 'default'}
        secureTextEntry={secureTextEntry}
        editable={editable}
        check={check}
        multiline={multiline}
        numberOfLines={numberOfLines}
        height={height}
      />
      {notShow ? null : value && !isEye && (

        <View style={styles.leftIconBox}>
          <Tick />
        </View>
      )}
      {isEye && (
        <TouchableOpacity
          style={[styles.leftIconBox, { marginTop: -4 }]}
          onPress={onEyePress}>
          <Feather
            name={secureTextEntry ? 'eye-off' : 'eye'}
            color={'#B7B7B7'}
            size={20}
          />
        </TouchableOpacity>
      )}

      {error ? <Text style={styles.error}>This is required.</Text> : null}
      {errorDisc ? <Text style={styles.error}>{errorDisc}</Text> : null}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  textInput: {
    height: scale(50),
    borderRadius: 5,
    marginBottom: 13,
    paddingLeft: 25,
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.regular,
    backgroundColor: colors.inputColor,
    flex: 1,
    paddingRight: 45,
    borderWidth: 1,
    marginLeft:12,
    marginRight:12,
    
  },
  iconBox: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    position: 'absolute',
    zIndex: 1,
    left: 25,
    top: 19,
  },
  inputBox: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  leftIconBox: {
    position: 'absolute',
    zIndex: 1,
    right: 20,
    top: 18,
    height: scale(50),
  },
});
