import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = () => {
  const [selectedButton, setSelectedButton] = useState(2);

  const handleButtonPress = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 1 ? styles.selectedButton : null,
           
        ]}
        onPress={() => handleButtonPress(1)}
      >
        <Text
          style={[
            styles.buttonText,
            selectedButton !== 1 ? styles.unselectedText : null,
           
          ]}
        >
          Morning
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          styles.middleButton,
          selectedButton === 2 ? styles.selectedButton : null,
          
        ]}
        onPress={() => handleButtonPress(2)}
      >
        <Text
          style={[
            styles.buttonText,
            selectedButton !== 2 ? styles.unselectedText : null,
          
          ]}
        >
          Day
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 3 ? styles.selectedButton : null,
          {marginLeft:-20},
        ]}
        onPress={() => handleButtonPress(3)}
      >
        <Text
          style={[
            styles.buttonText,
            selectedButton !== 3 ? styles.unselectedText : null,
          ]}
        >
          Night
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal:0  },
  button: {
    width: 60,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, 
  },
  middleButton: {
    marginLeft: -20, 
  },
  selectedButton: {
    backgroundColor: 'brown',
    zIndex:1
    
  },
  buttonText: {
    color: 'white',
    fontSize:12
  },
  unselectedText: {
    color: 'brown',
    fontSize:12
    
  },
});

export default ToggleButton;
