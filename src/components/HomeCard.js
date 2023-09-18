import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import ToggleButton from './ToggleButton'
import style from '../assets/css/style'
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeCard = () => {
    return (
        <ImageBackground source={require('../assets/images/png/pexels-piccinng.png')}
            style={styles.container}
        >
            <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, paddingHorizontal: 20 }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/images/png/user.png')} />
                    <Text style={{ marginLeft: 12, color: 'white', marginTop: 5 }}>Nermeen Saif</Text>
                </View>
                <View style={styles.starContainer}>
                    <Icon name="star" color="yellow" size={10} />
                    <Icon name="star" color="yellow" size={10} />
                    <Icon name="star" color="yellow" size={10} />
                    <Icon name="star" color="yellow" size={10} />
                    <Icon name="star" color="yellow" size={10} />
                </View>

            </View>
            <View style={{ marginTop: 80, marginLeft: 20 }}>
                <Text style={{ color: 'white', marginBottom: 6 }}>Booking Shift</Text>
                <ToggleButton />
            </View>
        </ImageBackground>
    )
}

export default HomeCard

const styles = StyleSheet.create({

    container: {
        height: '60%',
    },
    starContainer: {
        flexDirection: 'row',
        marginTop:10
      },
})