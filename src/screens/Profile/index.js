import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import style from '../../assets/css/style'
import user from '../../assets/images/png/user.png';
import Logout from '../../assets/images/svg/logout.svg';
import Notify from '../../assets/images/svg/notify.svg';
import Icon from 'react-native-vector-icons/AntDesign';
import Lock from '../../assets/images/svg/lock.svg';
import { colors } from '../../constraints';
import ArrowBox from '../../components/ArrowBox';
import profileStyle from './ProfileStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = ({ navigation }) => {
  const ref = useRef();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([])
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <Container customStyle={{paddingHorizontal:0}}>
      <Header title={'Settings'}  />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30 ,paddingHorizontal:20}}>
          <Text style={[style.font16R]}>Account</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('UserProfile');
          }}>
            <View style={[style.justifySpaBtwRow, { marginTop: 20 }]}>
              <Image style={{ width: 55, height: 55, borderRadius: 30 }} source={user} />
              <View
                style={[{ flex: 1, marginLeft: 30 }, style.justifySpaBtwRow]}>
                <View>
                  <Text style={[style.font16R]}>Narmen Saif</Text>
                  <Text style={[ { color: colors.darkGray }]}>
                    abc@gmail.com
                  </Text>
                </View>
                <ArrowBox />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={[ style.font16R,{ marginTop: 30 }]}>Settings</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('My_Business');
              }}
              style={[
                {
                  marginVertical: 20,
                },
                style.justifySpaBtwRow,
              ]}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/png/businessman.png')} style={{ height: 20, width: 20 }} />
                <Text style={[style.font16R, { marginLeft: 20 }]}>
                  My Business
                </Text>
              </View>
              <ArrowBox />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Terms_Condition');
              }}
              style={[
                {
                  marginVertical: 20,
                },
                style.justifySpaBtwRow,
              ]}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/png/contract.png')} style={{ height: 20, width: 20 }} />
                <Text style={[style.font16R, { marginLeft: 20 }]}>
                  Terms & Conditions
                </Text>
              </View>
              <ArrowBox />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  marginVertical: 20,
                },
                style.justifySpaBtwRow
              ]}
              onPress={handleShow}>
              <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/png/logout.png')} style={{ height: 20, width: 20 }} />
                <Text style={[style.font16R, { marginLeft: 20 }]}>
                  Logout
                </Text>
              </View>
              <ArrowBox onPress={handleShow} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
        <Pressable style={profileStyle.modalContainer} onPress={handleHide}>
          <View style={profileStyle.wrapper}>
            <TouchableOpacity style={profileStyle.circle} onPress={handleHide}>
              <Icon name="close" size={25} color={colors.primaryColor} />
            </TouchableOpacity>
            <Text
              style={[
                style.table_titel,
                { color: colors.primaryColor, textAlign: 'center' ,fontSize:20},
              ]}>
              Hold On!
            </Text>
            <Text style={[style.table_titel, { textAlign: 'center' }]}>
              Are you sure you want to logout?
            </Text>
            <View
              style={[
                style.justifySpaBtwRow,
                { marginBottom: 10, marginTop: 30 },
              ]}>
              <TouchableOpacity style={profileStyle.btn} onPress={handleHide}>
                <Text
                  style={[{ color: colors.primaryColor }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  profileStyle.btn,
                  { backgroundColor: colors.primaryColor },
                ]}
                onPress={async () => {
                  // await AsyncStorage.removeItem("userID")
                  // await AsyncStorage.removeItem("userRole")
                  setShow(false);
                  navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'AuthStack',
                        state: {
                          routes: [{ name: 'Login' }],
                        },
                      },
                    ],
                  })
                }}>
                <Text style={[ { color: colors.white }]}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </Container>
  );
};

export default Profile;
