import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Pressable, StatusBar, ScrollView } from 'react-native';
import BookingCard from '../../components/BookingCard';
import { colors } from '../../constraints';
import { scale } from 'react-native-size-matters'
import style from '../../assets/css/style'
import Header from '../../components/Header';
import ResCard from '../../components/ResCard';
import Container from '../../components/Container';
const data = [
  { id: '1',  name: 'Asteria hotel ', des:'Wilora NT 0872, Australia' },
  { id: '2',  name: 'Asteria hotel ',des:'Wilora NT 0872, Australia' },
  { id: '3',  name: 'Asteria hotel ', des:'Wilora NT 0872, Australia' },
];

const Booking = () => {
  const [booking, setBooking] = useState(booking)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [active, setActive] = useState(0);
  const Categories = ["All", "Awaiting", "Approved", "Decline"]
  const filterData = () => {
    if (selectedCategory === 'All') {
      return data;
    } else {
      return data.filter(item => item.category === selectedCategory);
    }
  };

  return (
    <Container>
      <StatusBar barStyle={'dark-content'}
        backgroundColor='#fff'
        animated={true}

      />
      <Header showShadow={false} showBorderRadius={false} title={'Restaurant'} />
     
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) =>
          <ResCard
            name={item.name}
            des={item.des}
           
          />
        }
      />
    </Container>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS == 'ios' ? StatusBar.currentHeight : 0,
    paddingHorizontal:10

  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginLeft: 2,
    marginRight: 6
  },

  selectedCategory: {
    backgroundColor: colors.primaryColor,
    color: 'white',
  },

  tabBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    margin: 5,
    borderColor: colors.primaryColor,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,

  },

});

export default Booking;
