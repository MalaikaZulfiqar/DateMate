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
const data = [
  { id: '1', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150' ,category:'Hollywoord Bowl'},
  { id: '2', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150' ,category:'Hollywoord Bowl'},
  { id: '3', name: 'Meliá Madrid ', rate: '5.0', location: 'Alice Springs NT 0870, USA', price: '$150' ,category:'Hollywoord Bowl'},
];
const CustomerHome = () => {
  const navigation=useNavigation()
  const [booking, setBooking] = useState(booking)
  const [selectedCategory, setSelectedCategory] = useState('Hollywoord Bowl');
  const [active, setActive] = useState(0);
  const Categories = ["Hollywoord Bowl", "Philz Coffee", "Chuy's", "Yogurtland"]
  const filterData = () => {
   
      return data.filter(item => item.category === selectedCategory);
    
  };
  return (
    <Container customStyle={{paddingHorizontal:0}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={style.box}>
      <View style={{ flexDirection: 'row', margin: 12 }}>
        <Image source={require('../../assets/images/png/user.png')} />
        <Text style={[style.font14, { fontSize: 14, marginTop: 10, marginLeft: 3 }]} >Nermeen Saif</Text>
      </View>
      <SearchBar />
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
                  style.font14,
                  {
                    color: active == index ? colors.white : colors.primaryColor,fontWeight:'normal',
                    fontSize:12

                  },
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:10 }}>
        <Text style={[style.font14, { marginTop: 10}]}>Nearby your location</Text>
        <TouchableOpacity>
          <Text style={[style.title, { fontSize: 14, marginTop: 10, marginLeft: 3, color: colors.primaryColor }]}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
      <FlatList
        data={filterData()}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        
        renderItem={({ item, index }) =>
          <HotelCard
            name={item.name}
            rate={item.rate}
            location={item.location}
            price={item.price}
            onPress={()=>{navigation.navigate('HotelDetail')}}
          />
        }
      />
       </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,margin:10}}>
        <Text style={[style.font14, { marginTop: 10}]}>Your Interest</Text>
        <TouchableOpacity>
          <Text style={[style.title, { fontSize: 14, marginTop: 10, marginLeft: 3, color: colors.primaryColor }]}>See all</Text>
        </TouchableOpacity>
      </View>
      </View>
    </Container>
  )
}

export default CustomerHome

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