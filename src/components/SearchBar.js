import React from 'react';
import { View, TextInput, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You may need to install this package

// Define your custom search bar component
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="search" size={20} color="#878787" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder=" Search Hotel"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="filter" size={20} color="#878787" />
      </TouchableOpacity>
    </View>
  );
};

// Define the styles for your custom search bar component
const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8', // Background color for the search bar
    borderRadius: 5, // Border radius for rounded corners
    borderWidth: 1, // Border width
    borderColor: '#ccc', // Border color
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  iconContainer: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
};

export default SearchBar;
