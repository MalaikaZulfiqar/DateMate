import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomView from '../../components/BottomView'
const Onboarding2 = () => {
  return (
    <View style={{backgroundColor:'white'}} >
       
      <Image
        source={require('../../assets/images/png/drinks.png')} 
        style={styles.image}
      />
      
        <BottomView/>
    </View>
  )
}

export default Onboarding2

const styles = StyleSheet.create({
   image:{
    width: '50%',
    aspectRatio: 0.75,
     marginTop:5,
     marginLeft:20
   }


})