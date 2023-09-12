import { Image, ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constraints'
import NumberSelector from '../../components/NumberSelector'
import { scale } from 'react-native-size-matters'
import Container from '../../components/Container'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import Success from '../Success'
const TableBooking = () => {
  const navigation = useNavigation()
  const [data, setData] = useState({
    person: '',
    date: '',
    time: '',
    table: '',
    add_on: '',


  });
  return (
    <>

      <Container customStyle={{ paddingHorizontal: 0 }}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

        <ImageBackground
          source={require('../../assets/images/png/Hotel_room.png')}
          style={styles.headerImage}

        >
          <View style={{ marginTop: 20 }}>
            <Header title={'Table Booking'} transparentBackground={true} /></View>

        </ImageBackground>
        <View style={style.box}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.lableStyle, { marginTop: 25 }]}>No. of Persons</Text>
            <InputBox
              notShow
              placeholder={'01'}
              value={data.person}
              onChangeText={text => {
                setData({ ...data, person: text });
              }}

            />
            <Text style={[style.lableStyle]}>Date</Text>
            <InputBox
              notShow
              placeholder={'01/04/2020'}
              value={data.date}
              onChangeText={text => {
                setData({ ...data, date: text });
              }}

            />
            <Text style={[style.lableStyle]}>Time</Text>
            <InputBox
              notShow
              placeholder={'01:00 Pm'}
              value={data.time}
              onChangeText={text => {
                setData({ ...data, time: text });
              }}

            />

            <Text style={[style.lableStyle]}>Add on</Text>
            <InputBox
              notShow
              placeholder={'Add'}
              value={data.add_on}
              onChangeText={text => {
                setData({ ...data, add_on: text });
              }}

            />
            <View style={style.buttonStyle}>
              <Button
                onPress={() => navigation.navigate('Success')}
                btnName={'Booking Now'}
                disabled={false}
                loading={false}
              />
            </View>
          </ScrollView>
        </View>



      </Container>
    </>
  )
}

export default TableBooking

const styles = StyleSheet.create({

  header: {


  },
  headerImage: {
    width: '120%',
    height: scale(200),
    marginLeft: scale(-10),
    resizeMode: 'cover'

  },
})