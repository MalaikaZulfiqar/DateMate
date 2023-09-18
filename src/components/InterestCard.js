import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../constraints';
import style from '../assets/css/style';
const InterestCard = ({name,location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
         <Image source={require('../assets/images/png/asteria_hostel.png')}  style={styles.image}/> 
      </View>
      <View style={styles.rightContent}>
        <Text style={[style.table_titel,{marginTop:4,marginBottom:5}]}>{name}</Text>
        <Text style={[style.table_subtitle,{marginBottom:8}]}>{location}</Text>
        <TouchableOpacity style={styles.btnContainer}>
            <Text style={{color:colors.white}}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 6,
    },
    elevation: 2,
    width:scale(320),
    marginRight:10
  },
  leftContent: {
   // flex: 1,
    marginRight: 10,
  },
  rightContent: {
    
    marginLeft:2
    //flex: 2,
  },
  image: {
    width: scale(100),
    height: 90,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer:{
    backgroundColor:colors.primaryColor,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    width:90,
    height:30,
    padding:4,
    marginLeft:105
  }
});

export default InterestCard;
