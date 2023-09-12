import { StyleSheet, Text, View,Pressable,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import bookingStyle from './bookingStyle'
import style from '../../assets/css/style'
import { scale } from 'react-native-size-matters'
const ResCard = ({
    name,
    des

}) => {
  return (
    <Pressable style={bookingStyle.card}>
            <View style={bookingStyle.box}>
              <Image source={require('../../assets/images/png/hotel.png')} style={bookingStyle.img} />
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  justifyContent: 'space-between',
                  height: scale(50)
                }}>

                <View style={{ marginRight: 20 }}>
                  <View style={[style.justifySpaBtwRow]}>
                    <Text style={bookingStyle.title}>{name}</Text>
                   
                  </View>
                  <View style={style.justifySpaBtwRow}>
                    <Text style={bookingStyle.subTitle}>{des}</Text>
                  </View>
                  <View style={{marginLeft:20}}>
                  <TouchableOpacity style={[bookingStyle.button, bookingStyle.filledButton]}>
                          <Text style={bookingStyle.buttonText}>Book</Text>
                  </TouchableOpacity>
                  </View>
                    
                   
                </View>
              </View>

            </View>

          </Pressable>
  )
}

export default ResCard
