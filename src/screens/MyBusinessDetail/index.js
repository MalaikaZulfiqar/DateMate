import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
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
import Facilities from './Facilities'
import Price from './Price'

const MyBusinessDetail = () => {
    const navigation = useNavigation()
    return (
        <Container >
            <View style={[style.box,{paddingHorizontal:0}]}>
            <Header title={'Detail'} />
          
            <Image source={require('../../assets/images/png/image3.png')} style={styles.image} resizeMode="cover" />
           
            <Facilities/>
            
       
            <Text style={[style.font14,{marginTop:10,marginBottom:8}]}>Price</Text>
            <Price/>
            <Text style={[style.font14,{marginTop:10,marginBottom:10}]}>The Aston Vill Hotel</Text>
            <Text style={[style.subTitle, {  color: colors.gray, fontSize: 14, marginRight: 10 }]}>Alice Springs NT 0870, Australia</Text>
            <Text style={[style.font14,{marginTop:10,marginBottom:10}]}>Description</Text>
            <Text style={[style.subTitle, {  color: colors.gray, fontSize: 14, marginRight: 10 }]}>Ads with pictures get 5x more views and leads Upload good quality pictures with proper lighting Cover all areas of your property</Text>



            <Text style={[style.font14,{marginTop:10,marginBottom:10}]}>Preview</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 30 }}>
                <Image source={require('../../assets/images/png/room1.png')} style={{ borderRadius: 8 }} />
                <Image source={require('../../assets/images/png/room2.png')} style={{ borderRadius: 8 }} />
                <Image source={require('../../assets/images/png/room3.png')} style={{ borderRadius: 8 }} />
            </View>
            
          
            </View>
            
             
          
        </Container>
    )
}

export default MyBusinessDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    image: {
        width: scale(310),
        height: scale(180),
        alignSelf: 'center',
        borderRadius: 5
    },
    heartIcon: {
        position: 'absolute',
        top: scale(65),
        right: scale(30),
    },
   

})