import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { colors } from '../../constraints'
import Container from '../../components/Container'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ApiRequest from '../../Services/ApiRequest'
const HealthStatus = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const { interest, ditary, bus_data, bus_price } = route.params
    const [selectedHealthStatus, setSelectedHealthStatus] = useState('');

    const handleInterestSelection = (interest) => {
        setSelectedHealthStatus(interest);
    };
    const handleSubmit = async () => {
        const role = await AsyncStorage.getItem('userRole');
        if (role == 'customer') {
            try {
                const ApiData = {
                    type: 'update_data',
                    table_name: 'users',
                    interests: JSON.stringify(interest),
                    diatery: JSON.stringify(ditary),
                    health_status: selectedHealthStatus,
                    id: '10'
                };
                const res = await ApiRequest(ApiData);
                console.log(res.data);
                if (res.data.result == true) {
                    navigation.navigate('Premium');
                } else {
                    console.log('not fetching');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const id=await AsyncStorage.getItem('userID');
                const ApiData = {
                    type: 'add_data',
                    table_name: 'business',
                    id: id,
                    name: bus_data.business_name,
                    description: bus_data.business_des,
                    synopsis: bus_data.synopsis,
                    opening_time: bus_data.open_time,
                    closing_time: bus_data.close_time,
                    red_price: bus_price.red,
                    orange_price: bus_price.orange,
                    green_price: bus_price.green,
                    interests: JSON.stringify(interest),
                    diatery: JSON.stringify(ditary),
                    health_status: selectedHealthStatus,
                };
                console.log(ApiData)
                const res = await ApiRequest(ApiData);
                console.log(res.data);
                if (res.data.result == true) {
                    navigation.navigate('UploadImg');
                } else {
                    console.log('not fetching');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    
return (
    <Container>
        <StatusBar barStyle={'dark-content'}
            backgroundColor='white'
            animated={true} />
        <Header showShadow={true} showBorderRadius={true} title={'Health Status'} />
        <Text style={[style.subTitle, { marginTop: 9, marginBottom: 11 }]}>What is your health status ?</Text>
        <View style={style.box}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>


                <ImageCard
                    imageSource={require('../../assets/images/png/disabled.jpg')}
                    text="Disable"
                    isSelected={selectedHealthStatus === 'Disabled'}
                    onPress={() => handleInterestSelection('Disabled')}
                    customStyle={{ borderRadius: 10 }}
                />

                <ImageCard
                    imageSource={require('../../assets/images/png/woman.png')}
                    text="Normal"
                    isSelected={selectedHealthStatus === 'Normal'}
                    onPress={() => handleInterestSelection('Normal')}
                />

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
const ImageCard = ({ imageSource, text, isSelected, onPress, customStyle }) => {
    const borderStyle = isSelected ? { borderColor: colors.primaryColor, borderWidth: 3 } : null;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.imageContainer, borderStyle]}>
                <ImageBackground source={imageSource} style={[styles.imgStyle, { backgroundColor: colors.black, opacity: 0.7 }]}>

                </ImageBackground>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};
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
        textAlign: 'center',
        //bottom: 40,
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        top: 45,
        position: 'absolute',

    },
    imgStyle: {
        height: 128,
        width: 130,
        borderRadius: 10
    }

})