import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import bookingStyle from './bookingStyle'
import style from '../../assets/css/style'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../constraints'
const BookingCard = ({
  name,
  booking_type,
  number_of_table,
  date,
  members,
  code,
  type,
  onPress

}) => {
  const icons = {
    Awaiting: <Icon name="clock-o" size={20} color={colors.orange} />,
    Approved: <Icon name="check" size={20} color="#28a745" />,
    Decline: <Icon name="times" size={20} color="#dc3545" />
  };
  return (
    <Pressable style={bookingStyle.card} onPress={onPress}>
      <View style={bookingStyle.box}>
        <Image source={require('../../assets/images/png/hotel.png')} style={bookingStyle.img} />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            justifyContent: 'space-between',
            height: scale(100)
          }}>

          <View style={{ marginRight: 20 }}>
            <View style={[style.justifySpaBtwRow]}>
              <Text style={[style.font12]}>{name}
              </Text>
              <Text style={[style.font12]}>Table No</Text>
            </View>
            <View style={style.justifySpaBtwRow}>
              <Text style={bookingStyle.subTitle}>{booking_type}</Text>
              <Text style={bookingStyle.subTitle}>{number_of_table}</Text>
            </View>
            <View style={[style.justifySpaBtwRow]}>
              <Text style={[style.font12]}>Date
              </Text>
              <Text style={[style.font12]}>Members</Text>
            </View>
            <View style={style.justifySpaBtwRow}>
              <Text style={bookingStyle.subTitle}>{date}</Text>
              <Text style={bookingStyle.subTitle}>{members}</Text>
            </View>
            <View style={[]}>
              <Text style={[style.font12]}>Booking Code

              </Text>
              <Text style={bookingStyle.subTitle}>{code}</Text>
            </View>
              {type === 'Awaiting' && (
                <TouchableOpacity style={[bookingStyle.greenOutlineButton]}>
                  {icons.Approved}
                  <Text style={[bookingStyle.buttonText, bookingStyle.greenButtonText]}>Approved</Text>
                </TouchableOpacity>
              )}
              {type === 'Approved' && (
                <View style={bookingStyle.buttonContainer}>
                    <TouchableOpacity style={[bookingStyle.button, bookingStyle.filledButton]}>
                          <Text style={bookingStyle.buttonText}>Accept</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[bookingStyle.greenOutlineButton,{borderColor:colors.primaryColor,marginLeft:0}]}>
                   
                    <Text style={[bookingStyle.buttonText, bookingStyle.greenButtonText,{color:colors.primaryColor}]}>Reject</Text>
                    
                  </TouchableOpacity>
                  
                </View>
              )}
              {type === 'Decline' && (
                <TouchableOpacity style={[bookingStyle.redOutlineButton]}>
                  {icons.Decline}
                  <Text style={[bookingStyle.buttonText, bookingStyle.redButtonText]}>Decline</Text>
                 
                </TouchableOpacity>
              )}
            
           
          </View>
        </View>

      </View>

    </Pressable>
  )
}

export default BookingCard
