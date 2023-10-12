import { Image, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar'
import { colors } from '../../constraints'
import style from '../../assets/css/style'
import HotelCard from '../../components/HotelCard'
import { FlatList } from 'react-native-gesture-handler'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import HotelDetail from '../HotelDetail'
import NumberSelector from '../../components/NumberSelector'
import Container from '../../components/Container'
import Header from '../../components/Header'
import MyBusinessCard from '../../components/MyBusinessCard'
import { BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetModal as BottomSheet } from '@gorhom/bottom-sheet';
import AllBusinessCard from '../../components/AllBusinessCard'
import ApiRequest from '../../Services/ApiRequest'
import AsyncStorage from '@react-native-async-storage/async-storage'
const data = [
  { id: '1', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150', category: 'Hollywoord Bowl' },
  { id: '2', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150', category: 'Hollywoord Bowl' },
  { id: '3', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150', category: 'Hollywoord Bowl' },
];
const AllBusiness = () => {
  const navigation = useNavigation()
  const [booking, setBooking] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('Hollywoord Bowl');
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const Categories = ["Hollywoord Bowl", "Philz Coffee", "Chuy's", "Yogurtland"]
  const filterData = () => {
    return data.filter(item => item.category === selectedCategory);
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchBusiness();
      return () => { };
    }, [])
  );
  const fetchBusiness = async () => {
    setIsLoading(true)
    const uid = await AsyncStorage.getItem('userID');
    const ApiData = {
      type: 'get_data',
      table_name: 'business',
      last_id: 0
    }
    const response = await ApiRequest(ApiData);

    if (response && response.data) {
      const data = response.data;
      setBooking(data.data);

    } else {
      setBooking([]);
    }
    setIsLoading(false);
  };
  const getPaginatedNotifications = async () => {
    const result = await AsyncStorage.getItem('userID');
    const ApiData = {
      type: 'get_data',
      table_name: 'business',
      last_id: booking[booking.length - 1].id
    }
    try {
      const res = await ApiRequest(ApiData);
      console.log(res.data)
      if (res.data.data.length !== 0) {
        setBooking([...booking, ...res.data.data])
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={style.box}>
        <Header title={'All Business'} />
        <View style={{ paddingHorizontal: 10 }}>
          <FlatList
            data={booking}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              getPaginatedNotifications()
            }}
            renderItem={({ item, index }) =>
              <AllBusinessCard
                name={item?.name}
                //rate={item.rate}
                rate='5.0'
                location={item?.address}
                // price={item.price}
                price='$150'
                onPress={() => { navigation.navigate('HotelDetail') }}
              />
            }
          />
        </View>

      </View>
    </Container>
  )
}

export default AllBusiness

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -1,
    marginLeft: 2,
    marginRight: -2,
    marginTop: 16
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
    marginLeft: 4,
    borderColor: colors.primaryColor,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,

  },

})