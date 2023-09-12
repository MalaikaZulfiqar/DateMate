import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constraints';

const DayNightSwitch = () => {
  const [selectedOption, setSelectedOption] = useState('Day');

  const toggleOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderBottomRightRadius: selectedOption === 'Day' ? 20 : 0,
            borderTopRightRadius: selectedOption === 'Day' ? 20 : 0,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            marginLeft:-10 ,
      
          },
          selectedOption === 'Day' ? styles.selected : null,
        ]}
        onPress={() => toggleOption('Day')}
      >
        <Text style={[selectedOption === 'Day' ? styles.selectedText : styles.text]}>Day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderBottomLeftRadius: selectedOption === 'Night' ? 20 : 0,
            borderTopLeftRadius: selectedOption === 'Night' ? 20 : 0,
            borderBottomRightRadius: selectedOption === 'Night' ? 20 : 0,
            borderTopRightRadius: selectedOption === 'Night' ? 20 : 0,
          },
          selectedOption === 'Night' ? styles.selected : null,
        ]}
        onPress={() => toggleOption('Night')}
      >
        <Text style={[selectedOption === 'Night' ? styles.selectedText : styles.text]}>Night</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderBottomLeftRadius: selectedOption === 'Morning' ? 20 : 0,
            borderTopLeftRadius: selectedOption === 'Morning' ? 20 : 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          },
          selectedOption === 'Morning' ? styles.selected : null,
        ]}
        onPress={() => toggleOption('Morning')}
      >
        <Text style={[selectedOption === 'Morning' ? styles.selectedText : styles.text,{ paddingLeft: -20, paddingRight: -20,}]}>Morning</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 4,
   
  },
  text: {
    fontSize: 14,
    color: colors.primaryColor,
  },
  selected: {
    backgroundColor: colors.primaryColor,
  },
  selectedText: {
    fontSize: 14,
    color: 'white',
  },
});

export default DayNightSwitch;
