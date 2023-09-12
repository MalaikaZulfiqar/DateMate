import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../components/Container'
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../constraints';
import style from '../../assets/css/style';
import { scale } from 'react-native-size-matters';
const BookingDetail = ({ route }) => {
  const { item } = route.params;
  const icons = {
    Awaiting: <Icon name="clock-o" size={20} color={colors.orange} />,
    Approved: <Icon name="check" size={20} color="#28a745" />,
    Decline: <Icon name="times" size={20} color="#dc3545" />
  };
  return (
    <Container customStyle={{paddingHorizontal:0}}>
      <Header title={item.code} />
      <Image source={require('../../assets/images/png/Hotel_room.png')} style={styles.image} />
      <View style={[style.box,{paddingHorizontal:20}]}>

        <View style={styles.infoContainer}>
          <Text style={[style.title],{fontSize:16,color:'black'}}>{item.name}</Text>


          {item.category === 'Awaiting' && (
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              {icons.Awaiting}
              <Text style={{ color: colors.orange }}>Awaiting</Text>
            </TouchableOpacity>
          )}
          {item.category === 'Approved' && (


            <TouchableOpacity style={{ flexDirection: 'row' }} >
              {icons.Approved}
              <Text style={{ color: colors.green }}>Approved</Text>
            </TouchableOpacity>

          )}
          {item.category === 'Decline' && (
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              {icons.Decline}
              <Text style={{ color: colors.red }}>Decline</Text>
            </TouchableOpacity>
          )}

        </View>
        <Text>
          {item.date}
        </Text>
        <View style={styles.infoContainer}>
          <Text style={[style.title,{fontSize:16}]}>Date</Text>
          <Text>
            {item.date}
          </Text>

        </View>
        <View style={styles.infoContainer}>
          <Text style={[style.title,{fontSize:16}]}>Table No</Text>
          <Text>
            {item.number_of_table}
          </Text>

        </View>
        <View style={styles.infoContainer}>
          <Text style={[style.title,{fontSize:16}]}>Members</Text>
          <Text>
            {item.members}
          </Text>

        </View>
        <View style={styles.infoContainer}>
          <Text style={[style.title,{fontSize:16}]}>Booking Code</Text>
          <Text>
            {item.code}
          </Text>

        </View>
        {
          item.category==='Decline' &&(
            <View style={{marginTop:8}} >
            <Text style={[style.title,{fontSize:16,textAlign:'left'}]}>Reason</Text>
            <Text>
            Your Requirement is not fulfill for this booking
            </Text>
  
          </View>
          )
        }
        {item.category === 'Awaiting' && (

          <Text style={[style.subTitle, styles.statusText, { color: colors.orange }]}>The booking has been Progress</Text>

        )}
        {item.category === 'Approved' && (

          <Text style={[style.subTitle, styles.statusText, { color: colors.green }]}>The booking has been approved.</Text>
        )}
        {item.category === 'Decline' && (

          <Text style={[style.subTitle, styles.statusText, { color: colors.red }]}>Your booking has been decline.</Text>

        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 10
  },
  image: {
    width: '100%',
    height: 200, 
    //alignSelf:'center',
    
   
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 18,
  },
  statusLine: {
    width: '100%',
    backgroundColor: 'orange', // Default color
    paddingVertical: 10,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30
  },
});

export default BookingDetail;
