import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constraints';

const NumberSelector = () => {
  const [disabledNumbers, setDisabledNumbers] = useState([2, 8, 9]);
  const [selectedNumber, setSelectedNumber] = useState(null);

  // Simulate fetching data from an API
  useEffect(() => {
    // Replace this with your API fetch logic
    // Example API response format: { disabledNumbers: [2, 4, 6] }
    // const fetchDisabledNumbers = async () => {
    //   const apiResponse = /* Fetch API data here */;
    //   if (apiResponse && apiResponse.disabledNumbers) {
    //     setDisabledNumbers(apiResponse.disabledNumbers);
    //   }
    // };

    // fetchDisabledNumbers();
  }, []);

  const handleNumberPress = (number) => {
    if (!disabledNumbers.includes(number)) {
      console.log(`Selected number: ${number}`);
      setSelectedNumber(number);
    }
  };

  return (
    <View style={styles.container}>
      {/* First Line */}
      <View style={styles.line}>
        {Array.from({ length: 5 }, (_, index) => {
          const number = index + 1;
          const isDisabled = disabledNumbers.includes(number);
          const isSelected = selectedNumber === number;

          return (
            <TouchableOpacity
              key={number}
              onPress={() => handleNumberPress(number)}
              disabled={isDisabled}
              style={[
                styles.numberButton,
                isDisabled && styles.disabledButton,
                isSelected && {
                  backgroundColor: colors.primaryColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.numberText,
                  isSelected && { color: 'white' },
                ]}
              >
                {number}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Second Line */}
      <View style={styles.line}>
        {Array.from({ length: 5 }, (_, index) => {
          const number = index + 6; // Numbers 6 to 10
          const isDisabled = disabledNumbers.includes(number);
          const isSelected = selectedNumber === number;

          return (
            <TouchableOpacity
              key={number}
              onPress={() => handleNumberPress(number)}
              disabled={isDisabled}
              style={[
                styles.numberButton,
                isDisabled && styles.disabledButton,
                isSelected && {
                  backgroundColor: colors.primaryColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.numberText,
                  isSelected && { color: 'white' },
                ]}
              >
                {number}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Third Line */}
      <View style={styles.line}>
        {Array.from({ length: 2 }, (_, index) => {
          const number = index + 11; // Numbers 11 and 12
          const isDisabled = disabledNumbers.includes(number);
          const isSelected = selectedNumber === number;

          return (
            <TouchableOpacity
              key={number}
              onPress={() => handleNumberPress(number)}
              disabled={isDisabled}
              style={[
                styles.numberButton,
                isDisabled && styles.disabledButton,
                isSelected && {
                  backgroundColor: colors.primaryColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.numberText,
                  isSelected && { color: 'white' },
                ]}
              >
                {number}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  numberButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 3,
    backgroundColor: colors.white,
    margin: 2,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#DCDCDC',
  },
  numberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default NumberSelector;
