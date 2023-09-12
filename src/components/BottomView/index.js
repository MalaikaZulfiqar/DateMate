import { Image, StyleSheet, Text, View } from 'react-native';
import {scale} from 'react-native-size-matters'
import React from 'react'

const BottomView = () => {
  return (
    <View>
        
       
        <View style={styles.bottomContainer}>
      
        <Text style={styles.mainHeading}>
        Lorem ipsum dolor sit amet, consectetur 
        </Text>

    
        <Text style={styles.subtitle}>
          This is a multiline subtitle that can span multiple lines as needed.
        </Text>

       
        <View style={styles.centeredImageContainer}>
          <Image
            source={require('../../assets/images/png/Group.png')}
            style={styles.smallImage}
          />
        </View>
      </View>
    </View>
  )
}

export default BottomView

const styles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: '#8D311E',
    paddingHorizontal: scale(30),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: scale(-50),
   
    
  },
  mainHeading: {
    color: 'white',
    fontSize: scale(18),
    fontWeight: 'bold',
    marginBottom: scale(8), 
    textAlign: 'center', 
    margin:scale(40)
  },
  subtitle: {
    color: 'white',
    fontSize: scale(14),
    textAlign: 'center', 
    margin:scale(15)
  },
  smallImage: {
    width: 120, 
    height: 120, 
    
  },
  centeredImageContainer: {
    alignItems: 'center', 
    marginBottom:scale(50)
  },
})