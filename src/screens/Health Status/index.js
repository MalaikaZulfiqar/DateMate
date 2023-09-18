import { StyleSheet, Text, View, StatusBar, Image ,TouchableOpacity,ImageBackground} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../constraints'
import Container from '../../components/Container'
import AsyncStorage from '@react-native-async-storage/async-storage'
const HealthStatus = () => {
    const navigation = useNavigation()
    const [selectedInterest, setSelectedInterest] = useState(null);

    const handleInterestSelection = (interest) => {
        setSelectedInterest(interest);
    };
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
            <Text style={[style.subTitle, { marginTop: 9, marginBottom: 11 }]}>What is your health status ?</Text>
            <View style={style.box}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>


                    <ImageCard
                        imageSource={require('../../assets/images/png/disabled.jpg')}
                        text="Disable"
                        isSelected={selectedInterest === 'Disabled'}
                        onPress={() => handleInterestSelection('Disabled')}
                        customStyle={{borderRadius:10}}
                    />

                    <ImageCard
                        imageSource={require('../../assets/images/png/woman.png')}
                        text="Normal"
                        isSelected={selectedInterest === 'Normal'}
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
const ImageCard = ({ imageSource, text, isSelected, onPress,customStyle }) => {
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
        top:45,
        position:'absolute',
        
    },
    imgStyle: {
        height: 128,
        width: 130,
        borderRadius: 10
    }

})