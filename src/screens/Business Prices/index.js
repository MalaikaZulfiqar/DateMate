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

const BusinessPrice = () => {
  const navigation = useNavigation()
  const [data, setData] = useState({
    red: '',
    green: '',
    orange: '',



  });
  return (
    <>

      <Container customStyle={{ paddingHorizontal: 0 }} >
        <StatusBar barStyle={'dark-content'} backgroundColor='white' />
        <View style={style.box}>
          <Header title={'Business Prices'} showBorderRadius={true} showShadow={true} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.lableStyle,{marginTop:26}]}>Red Price</Text>
            <InputBox
              notShow
              placeholder={'Red'}
              value={data.person}
              onChangeText={text => {
                setData({ ...data, person: text });
              }}

            />
            <Text style={[style.lableStyle]}>Green Price</Text>
            <InputBox
              notShow
              placeholder={'Green'}
              value={data.date}
              onChangeText={text => {
                setData({ ...data, date: text });
              }}

            />
            <Text style={[style.lableStyle]}>Orange Price</Text>
            <InputBox
              notShow
              placeholder={'Orange'}
              value={data.time}
              onChangeText={text => {
                setData({ ...data, time: text });
              }}

            />
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <Button
                onPress={() => navigation.navigate('Interest')}
                btnName={'Continue'}
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

export default BusinessPrice


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