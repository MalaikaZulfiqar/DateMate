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
const data = [
  { id: '1', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150', category: 'Hollywoord Bowl' },
  { id: '2', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150', category: 'Hollywoord Bowl' },
  { id: '3', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150', category: 'Hollywoord Bowl' },
];
const AllBusiness = () => {
  const navigation = useNavigation()
  const [booking, setBooking] = useState(booking)
  const [selectedCategory, setSelectedCategory] = useState('Hollywoord Bowl');
  const [active, setActive] = useState(0);
  const Categories = ["Hollywoord Bowl", "Philz Coffee", "Chuy's", "Yogurtland"]
  const filterData = () => {

    return data.filter(item => item.category === selectedCategory);

  };
  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={style.box}>
      <Header title={'All Business'} />
        <View style={{paddingHorizontal:10}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
           

            renderItem={({ item, index }) =>
              <AllBusinessCard
                name={item.name}
                rate={item.rate}
                location={item.location}
                price={item.price}
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