import { Image, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar'
import { colors } from '../../constraints'
import style from '../../assets/css/style'
import HotelCard from '../../components/HotelCard'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import HotelDetail from '../HotelDetail'
import NumberSelector from '../../components/NumberSelector'
import Container from '../../components/Container'
import Header from '../../components/Header'
import MyBusinessCard from '../../components/MyBusinessCard'
import { BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetModal as BottomSheet } from '@gorhom/bottom-sheet';
import AllBusinessCard from '../../components/AllBusinessCard'
import InterestCard from '../../components/InterestCard'
const data = [
  { id: '1', name: 'Meliá Madrid ' ,location: 'Alice Springs NT 0870, USA' },
  { id: '2', name: 'Meliá Madrid ' ,location: 'Alice Springs NT 0870, USA' },
  { id: '3', name: 'Meliá Madrid ', location: 'Alice Springs NT 0870, USA' },
];
const AllInterest = () => {
  const navigation = useNavigation()
  const [booking, setBooking] = useState(booking)
  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={style.box}>
      <Header title={'Interest'} />
        <View style={{paddingHorizontal:5}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
           

            renderItem={({ item, index }) =>
              <InterestCard
                name={item.name}
                location={item.location}
              />
            }
          />
        </View>

      </View>
    </Container>
  )
}

export default AllInterest

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