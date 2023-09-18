import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import bookingStyle from './bookingStyle'
import style from '../../assets/css/style'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
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
    Awaiting: <Icon name="clockcircleo" size={18} color={colors.orange} />,
    Approved: <Icon name="check" size={20} color="#28a745" />,
    Decline: <Icon2 name="cross" size={20} color="#dc3545" />
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
              <Text style={[style.table_titel]}>{name}
              </Text>
              <Text style={[style.table_titel]}>Table No</Text>
            </View>
            <View style={style.justifySpaBtwRow}>
              <Text style={style.table_subtitle}>{booking_type}</Text>
              <Text style={style.table_subtitle}>{number_of_table}</Text>
            </View>
            <View style={[style.justifySpaBtwRow]}>
              <Text style={[style.table_titel]}>Date
              </Text>
              <Text style={[style.table_titel]}>Members</Text>
            </View>
            <View style={style.justifySpaBtwRow}>
              <Text style={style.table_subtitle}>{date}</Text>
              <Text style={style.table_subtitle}>{members}</Text>
            </View>
            <View style={[style.justifySpaBtwRow]}>
              <View>
              <Text style={[style.table_titel]}>Booking Code </Text>
              <Text style={style.table_subtitle}>{code}</Text>
              </View>
              <View>
              {type === 'Awaiting' && (
                <TouchableOpacity style={[bookingStyle.OutlineButton,{borderColor:colors.orange}]}>
                  {icons.Awaiting}
                  <Text style={[bookingStyle.oulineButtonText,{color:colors.orange}]}>Awaiting</Text>
                </TouchableOpacity>
              )}
              {type === 'Approved' && (
              

                  <TouchableOpacity style={[bookingStyle.OutlineButton]}>
                    {icons.Approved}
                    <Text style={[ bookingStyle.oulineButtonText]}>Approved</Text>
                  </TouchableOpacity>
                
              )}
              {type === 'Decline' && (
                <TouchableOpacity style={[bookingStyle.OutlineButton,{borderColor:colors.red}]}>
                  {icons.Decline}
                  <Text style={[ bookingStyle.oulineButtonText,{color:colors.red}]}>Decline</Text>
                </TouchableOpacity>
              )}
              </View>
            </View>

            
           
          </View>
        </View>

      </View>

    </Pressable>
  )
}

export default BookingCard
