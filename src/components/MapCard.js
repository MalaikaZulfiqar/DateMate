import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../assets/css/style';
import { colors } from '../constraints';
const MapCard = ({ title, subtitle, imageSource }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image source={imageSource}  style={styles.image}/>
      </View>
      <View style={styles.rightContent}>
        <Text style={[style.table_titel,{marginBottom:8}]}>{title}</Text>
        <Text style={[style.table_subtitle,{marginBottom:8}]}>{subtitle}</Text>
        <View style={styles.starContainer}>
          <Icon name="star" color="#FFD20F" size={18} />
          <Icon name="star" color="#FFD20F" size={18} />
          <Icon name="star" color="#FFD20F" size={18} />
          <Icon name="star" color="#FFD20F" size={18} />
          <Icon name="star" color="#FFD20F" size={18} />
        </View>
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
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    width:scale(280),
    marginRight:8,
    marginLeft:1
  },
  leftContent: {
   // flex: 1,
    marginRight: 5,
  },
  rightContent: {
    
    marginLeft:5
    //flex: 2,
  },
  image: {
    width: scale(90),
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
});

export default MapCard;
