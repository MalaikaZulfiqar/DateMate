import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import ToggleButton from './ToggleButton'
import style from '../assets/css/style'
const HomeCard = () => {
    return (
        <ImageBackground source={require('../assets/images/png/pexels-piccinng.png')}
            style={styles.container}
        >
            <View style={[{flexDirection:'row',justifyContent:'space-between',marginTop:50,paddingHorizontal:20}]}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../assets/images/png/user.png')} />
                     <Text style={{marginLeft:12,color:'white',marginTop:5}}>Nermeen Saif</Text>
                </View>
                <View>
                      <Text style={{color:'yellow'}}>*****</Text>
                </View>
               
            </View>
            <View style={{marginTop:100,marginLeft:20}}>
            <Text style={{color:'white',marginBottom:6}}>Booking Shift</Text>
            <ToggleButton/>
            </View>
        </ImageBackground>
    )
}

export default HomeCard

const styles = StyleSheet.create({

    container: {
        height: '60%',
    }
})