import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from '../../assets/css/style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
function MainHeader({ title  }) {
     const navigation = useNavigation()
     return (
          <View >
               <TouchableOpacity onPress={() => navigation.goBack()}>
               <Icon name="arrow-left" color={'#000000'} size={20} />
               </TouchableOpacity>
               <Text style={style.headertext}>{title}</Text>
               
          </View>
     );
}

export default MainHeader;