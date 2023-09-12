import React, { useState ,useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Pressable, StatusBar, ScrollView } from 'react-native';
import BookingCard from '../../components/BookingCard';
import { colors } from '../../constraints';
import { scale } from 'react-native-size-matters'
import style from '../../assets/css/style'
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import BookingDetail from '../BookingDetail';
import Container from '../../components/Container';
const data = [
  { id: '1', category: 'Awaiting', name: 'Meliá Madrid ', booking_type: 'Dinner party', number_of_table: '5', date: '25 Aug    11:pm', members: '2', code: '8489' },
  { id: '2', category: 'Approved', name: 'Meliá Madrid ', booking_type: 'Dinner party', number_of_table: '3', date: '28 Aug    11:pm', members: '2', code: '8480' },
  { id: '3', category: 'Decline', name: 'Meliá Madrid ', booking_type: 'Dinner party', number_of_table: '5', date: '25 Aug    11:pm', members: '2', code: '8489' },
];

const Booking = () => {
  
  const navigation=useNavigation()
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
    <>
    <Container customStyle={{paddingHorizontal:5}}>
      <StatusBar barStyle={'dark-content'}
        backgroundColor='#fff'
        animated={true}

      />
      <Header showShadow={false} showBorderRadius={false} title={'Booking'} />
      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {Categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabBox,
                {
                  marginRight: 7,
                  backgroundColor:
                    active == index ? colors.primaryColor : colors.white,
                },
              ]}
              onPress={() => {
                setActive(index);
                setSelectedCategory(category);
              }}>

              <Text
                style={[
                  style.font12,
                  {
                    color: active == index ? colors.white : colors.primaryColor,

                  },
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={filterData()}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) =>
          <BookingCard
            name={item.name}
            booking_type={item.booking_type}
            number_of_table={item.number_of_table}
            date={item.date}
            members={item.members}
            code={item.code}
            type={item.category}
            onPress={()=>{navigation.navigate('BookingDetail',{item:item})}}
          />
        }
      />
    </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS == 'ios' ? StatusBar.currentHeight : 0,

  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginLeft: 10,
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
