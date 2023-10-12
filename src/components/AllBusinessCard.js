import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../constraints';
import style from '../assets/css/style';
const AllBusinessCard = ({ name, rate, location, price, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.leftContent}>
                    <Image source={require('../assets/images/png/asteria_hostel.png')} style={styles.image} />
                </View>
                <View style={styles.rightContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={[style.table_titel, { fontSize: 14 }]}>{name}</Text>
                         
                        <Text style={[style.table_titel, { fontSize: 14 }]}>{rate}</Text>
                    </View>
                    <Text style={[style.table_subtitle, { color: colors.gray, fontSize: 12, lineHeight: 25, marginBottom: 5 }]}>{location}</Text>
                    <View style={{ flexDirection: 'row', fontSize: 14 }}>
                        <Text style={[style.table_titel, { color: colors.primaryColor }]}>Booking Price:</Text>
                        <Text style={[style.table_titel]}>{'  '}{price} </Text>
                    </View>
                </View>
            </View>
        </Pressable>
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
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 2,
        width: scale(305),
        marginLeft:2
    },
    leftContent: {
        // flex: 1,
        marginRight: 10,
    },
    rightContent: {

       // marginLeft: 2
        flex: 2,
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
    btnContainer: {
        backgroundColor: colors.primaryColor,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 30,
        padding: 4,
        marginLeft: 105
    }
});

export default AllBusinessCard;
