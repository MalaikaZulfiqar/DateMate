import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomView from '../../components/BottomView'
const Onboarding1 = () => {
  return (
    <View style={{backgroundColor:'white'}}>
       
      <Image
        source={require('../../assets/images/png/couple.png')} 
        style={styles.image}
      />
      
        <BottomView style={styles.bottomView} />
    </View>
  )
}

export default Onboarding1

const styles = StyleSheet.create({
   image:{
    marginTop:60,
    marginLeft:18,
    marginRight:12,
    zIndex:-1
   },

   bottomView: {
    position: 'absolute',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center', 
    zIndex:-1,
  },
})






