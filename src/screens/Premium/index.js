import { StyleSheet, Text, View ,StatusBar,Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import { colors } from '../../constraints'
import BaseButton from '../../components/BaseButton'
import { useNavigation } from '@react-navigation/native'
import Container from '../../components/Container'
import { scale } from 'react-native-size-matters'
const Premium = () => {
  const navigation=useNavigation()
    const Separator = () => {
        return <View style={styles.separator} />;
      };
  return (
    <Container>
    <StatusBar barStyle={'dark-content'}
        backgroundColor='#fff'
        animated={true} 
        
        />
    <Header showShadow={false} showBorderRadius={false} title={'Go Premium'} />
    <Text style={[style.subTitle, { marginTop:9,marginBottom:11 }]}>No commitment , Cancel anytime</Text>
  <View style={styles.cardContainer}>
    <LinearGradient
        style={styles.card}
      start={{ x: 1, y: 1 }} end={{ x: 1, y: 0 }} colors={['rgba(141, 49, 30, 0.50)', '#8D311E',]}
      >
     <Text style={[style.subTitle, { margin: 10 ,color:'white',textAlign:'center'}]}>Popular Plan</Text>
     <View style={{flexDirection:'row',marginBottom:10}}>
       <Image source={require('../../assets/images/png/Ellipse.png')} style={{margin:4,marginLeft:20,marginBottom:10}}/>
       <Text style={[style.subTitle, { color:'white',fontSize:14,marginLeft:8}]}>28-Day free</Text>
     </View>
     <View style={{flexDirection:'row',marginBottom:10}}>
       <Image source={require('../../assets/images/png/Ellipse.png')} style={{margin:4,marginLeft:20,marginBottom:10}}/>
       <Text style={[style.subTitle, { color:'white',fontSize:14,marginLeft:8}]}>Unlimited Access to all food</Text>
     </View>
     <View style={{flexDirection:'row',marginBottom:10}}>
       <Image source={require('../../assets/images/png/Ellipse.png')} style={{margin:4,marginLeft:20,marginBottom:10}}/>
       <Text style={[style.subTitle, { color:'white',fontSize:14,marginLeft:8}]}>Advanced focus time statistics</Text>
     </View>
     <View style={{flexDirection:'row',marginBottom:10}}>
       <Image source={require('../../assets/images/png/Ellipse.png')} style={{margin:4,marginLeft:20,marginBottom:10}}/>
       <Text style={[style.subTitle, { color:'white',fontSize:14,marginLeft:8}]}>Tagging successful sessions</Text>
     </View>
     <Separator />
     <Text style={[style.subTitle, { color:'white',fontSize:14,textAlign:'center',marginBottom:scale(30)}]}>$4.99/month after 3-day trial</Text>
    </LinearGradient>
    </View>
    <View style={styles.buttonContainer}>
         
          <BaseButton
            onPress={() => { navigation.navigate('HomeStack') }}
            buttonColor='rgba(141, 49, 30, 0.50)'
            textColor="white"
            buttonText="Start Plan"
          />
        </View>
    </Container>
   
  )
}

export default Premium

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center', // Center the card horizontally
    flex: 1,              // Take up available vertical space
  },
    card: {
       
        borderRadius:12,
        width:'90%',
        //paddingHorizontal:scale(40)
        //paddingRight:30
      },
      container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 17,
        margin:12
      },
      buttonContainer: {
       
        marginTop:30,
        flex:0.90
      },
})