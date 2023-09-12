import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
const ChooseGender = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}
                backgroundColor='transparent'
                animated={true} />
            <Header showShadow={true} showBorderRadius={true} title={'DateMate'} />
            <Text style={[style.subTitle, { margin: 10 }]}>What is your gender ?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Image source={require('../../assets/images/png/man.png')} />
                <Image source={require('../../assets/images/png/woman.png')} />
            </View>
            <View style={[style.buttonStyle,{marginTop:400}]}>
                <Button
                    onPress={()=>navigation.navigate('HealthStatus')}
                    btnName={'Continue'}
                    disabled={false}
                    loading={false}
                />
            </View>
        </View>
    )
}

export default ChooseGender

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    }

})