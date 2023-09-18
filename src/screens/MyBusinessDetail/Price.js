import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constraints'
import { scale } from 'react-native-size-matters'
import Container from '../../components/Container'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Price = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
                
                <Text style={[style.title],{color:colors.green}}>$150</Text>
               
               
                <Text style={[style.title],{color:colors.orange}}>$100</Text>
               
               
                <Text style={[style.title],{color:colors.red}}>$200</Text>
              
               
            </View>
  )
}

export default Price

const styles = StyleSheet.create({
    btn:{
        flexDirection:'row',
     
    }
})