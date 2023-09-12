import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constraints'
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from 'react-native-size-matters'
import Container from '../../components/Container'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Facilities = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={styles.btn}>
                <Icon name="wifi" size={15} color={colors.black} style={styles.iconStyle}/>
                <Text style={[style.title],{fontSize:12,color:colors.black}}>Free Wifi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                <MatIcon name="bread-slice-outline" size={15} color={colors.black} style={styles.iconStyle}/>
                <Text style={[style.title],{fontSize:12,color:colors.black,margin:2}}>Free Breakfast</Text>
                </TouchableOpacity>
                 <TouchableOpacity style={styles.btn}>
                <AntIcon name="star" size={15} color={'#FFD33C'} style={styles.iconStyle} />
                <Text style={[style.title],{fontSize:12,color:colors.black}}>5.0</Text>
                </TouchableOpacity>
               
            </View>
  )
}

export default Facilities

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#F5F5FFB2',
        borderRadius:8,
        flexDirection:'row',
        height:30,
        padding:5,
        marginTop:10
    },
    iconStyle:{
        margin:3
       
    }
})