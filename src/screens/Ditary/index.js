import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constraints'
import Container from '../../components/Container'
import { scale } from 'react-native-size-matters'
const Ditary = () => {
    const navigation = useNavigation()
   
    return (
        <Container>
            <StatusBar barStyle={'dark-content'}
                backgroundColor={colors.white}
                animated={true} />
            <Header showShadow={true} showBorderRadius={true} title={'Ditary'} />
            <Text style={[style.subTitle, { marginTop:9,marginBottom:11 }]}>Select Your Interest</Text>
            <View style={style.box}>
           

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/png/vegan.png')} style={styles.imgStyle}/>
                    <Text style={styles.text}>Vegitarian</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/png/gluten.png')} style={styles.imgStyle}/>
                    <Text style={styles.text}>Gluten Free</Text>
                </View>
               
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/png/dairy_free.png')} style={styles.imgStyle}/>
                    <Text style={styles.text}>Dairy Free</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/png/vegan.png')} style={styles.imgStyle}/>
                    <Text style={styles.text}>Vegan</Text>
                </View>
              
            </View>
            </View>

           
                <Button
                    onPress={() => navigation.navigate('HealthStatus')}
                    btnName={'Continue'}
                    disabled={false}
                    loading={false}
                />
           
        </Container>
    )
}

export default Ditary

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    dottedLine: {
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderStyle: 'dashed',
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    text: {
        position: 'absolute',
        textAlign: 'center',
        bottom: 40,
        color:'white',
        fontSize:18,
        fontWeight:'900'
    },
   imgStyle:{
    height:scale(90),
    width:scale(90),
    
   }
})