import React from 'react';
import { View, Text, Image, StyleSheet ,Pressable} from 'react-native';
import style from '../assets/css/style';
import { colors } from '../constraints';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from 'react-native-size-matters';

const HotelCard = ({ name, rate, location, price,onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={require('../assets/images/png/image3.png')} style={styles.image} resizeMode="cover" />
      <Icon name="heart" size={24} color={colors.primaryColor} style={styles.heartIcon} />
      <View style={styles.content}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          <Text style={[style.table_titel, { fontSize: 14 }]}>{name}</Text>
          <Text style={[style.table_titel, { fontSize: 14 }]}>{rate}</Text>
        </View>
        <View style={{ marginBottom: 5 }}>
          <Text style={[style.table_subtitle, { textAlign: 'left', fontSize: 12, color: colors.gray }]}>{location}</Text>
        </View>
        <View style={{ flexDirection: 'row', fontSize: 14 }}>
          <Text style={[style.table_titel, { color: colors.primaryColor, fontSize: 14 ,paddingBottom:10}]}>Booking Price:</Text>
          <Text style={[style.table_titel, { fontSize: 14 }]}>{'  '}{price} </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 2, // Add shadow to the card
    backgroundColor: '#fff',
    height: scale(250),
    width: scale(250),
    margin:10,
    paddingBottom:10,
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12
  },
  image: {
    width: '100%',
    height: '70%',
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HotelCard;
