import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constraints'
import Container from '../../components/Container'
import AsyncStorage from '@react-native-async-storage/async-storage'
const HealthStatus = () => {
    const navigation=useNavigation()
    const handleSubmit = async () => {
        const role = await AsyncStorage.getItem('userRole');
        {
          role == 'customer' ? navigation.navigate('Premium') : navigation.navigate('UploadImg')
        }
      }
    return (
        <Container>
            <StatusBar barStyle={'dark-content'}
                backgroundColor='white'
                animated={true} />
            <Header showShadow={true} showBorderRadius={true} title={'Health Status'} />
            <Text style={[style.subTitle,{marginTop:9,marginBottom:11}]}>What is your health status ?</Text>
            <View style={style.box}>
           
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
               
                
          
            <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/png/disabled.jpg')} style={styles.imgStyle}/>
                <Text style={styles.text}>Disable</Text>
            </View>
            <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/png/woman.png')} style={styles.imgStyle}/>
                    <Text style={styles.text}>Normal</Text>
            </View>
            </View>
            </View>
                <Button
                    onPress={handleSubmit}
                    btnName={'Continue'}
                    disabled={false}
                    loading={false}
                />
           
        </Container>
    )
}

export default HealthStatus

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    text: {
        position: 'absolute',
        textAlign: 'center',
        bottom: 50,
        color:colors.white,
        fontSize:20,
        fontWeight:'900'
    },
    imgStyle:{
        height:128,
        width:130,
        borderRadius:10
    }

})