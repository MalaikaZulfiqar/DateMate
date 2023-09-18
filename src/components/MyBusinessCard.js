import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Modal,
  Dimensions,
  LayoutAnimation,
} from 'react-native';
import style from '../assets/css/style';
import { colors } from '../constraints';
import Icon from 'react-native-vector-icons/Entypo';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
const MyBusinessCard = ({ name, rate, location, price, onPress }) => {
  const navigation=useNavigation()
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 }); // Adjusted for right side space

  const toggleModal = () => {
    if (!isModalVisible) {
      // Calculate the position of the modal relative to the three dots icon
      measureIconPosition();
    }
    setModalVisible(!isModalVisible);
  };

  const measureIconPosition = () => {
    if (iconRef.current) {
      iconRef.current.measure((x, y, width, height, pageX, pageY) => {
        const screenWidth = Dimensions.get('window').width;
        const modalWidth = 300; // Adjust as needed
        const rightSpace = screenWidth - (pageX + width + modalWidth);
        const adjustedRight = Math.max(rightSpace, 25); // Minimum space from the right
        setModalPosition({ top: pageY + height, right: adjustedRight });
      });
    }
  };

  const handleEdit = () => {
    toggleModal();
    navigation.navigate('AddBusiness')
  };

  const handleDelete = () => {
 
    toggleModal();
  };

  const iconRef = useRef(null);

  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <Image source={require('../assets/images/png/image3.png')} style={styles.image} resizeMode="cover" />
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={toggleModal}
          ref={iconRef}
        >
          <Icon name="dots-three-vertical" size={20} color={colors.primaryColor} />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            <Text style={[style.table_titel]}>{name}</Text>
            <Text style={[style.table_titel]}>{rate}</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={[style.table_subtitle]}>{location}</Text>
          </View>
          <View style={{ flexDirection: 'row', fontSize: 14 }}>
            <Text style={[style.table_titel, { color: colors.primaryColor, fontSize: 14 }]}>Booking Price:</Text>
            <Text style={[style.table_titel, { fontSize: 14 }]}>{'  '}{price} </Text>
          </View>
        </View>
      </Pressable>

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={[styles.modalContainer, { top: modalPosition.top, right: modalPosition.right }]}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleEdit}>
              <Text style={styles.modalOption}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Text style={[styles.modalOption]}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: '#fff',
    height: scale(300),
    width: scale(310),
    margin: 10
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
    top: 8,
    right: 5,
  },
  modalContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    minWidth: 50,
    paddingLeft:25,
    paddingRight:25
  },
  modalOption: {
    fontSize: 18,
    padding: 8,
  
  },
});

export default MyBusinessCard;
