import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ImageBackground,FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import style from '../../assets/css/style';
import Button from '../../components/Button';
import { useNavigation,useRoute } from '@react-navigation/native';
import { colors } from '../../constraints';
import Container from '../../components/Container';
import { scale } from 'react-native-size-matters';
import ImageCard from '../../components/ImageCard';
import ApiRequest from '../../Services/ApiRequest';
const data = [
    { id: 'Romantic', imageSource: require('../../assets/images/png/cultural.png'), text: 'Romantic' },
    { id: 'Casual', imageSource: require('../../assets/images/png/casual.png'), text: 'Casual' },
    { id: 'Intellectual', imageSource: require('../../assets/images/png/intellectual.png'), text: 'Intellectual' },
    { id: 'Activity', imageSource: require('../../assets/images/png/activity.png'), text: 'Activity' },
    { id: 'Cultural', imageSource: require('../../assets/images/png/cultural.png'), text: 'Cultural' },
    { id: 'Indoor', imageSource: require('../../assets/images/png/intellectual.png'), text: 'Indoor' },
    { id: 'Outdoor', imageSource: require('../../assets/images/png/casual.png'), text: 'Outdoor' },
];
const Interest = () => {
    const navigation = useNavigation();
    const route=useRoute();
    const {bus_data,bus_price}=route.params
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleInterestSelection = (interest) => {
        if (selectedInterests.includes(interest)) {
            // If the interest is already selected, remove it from the array
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
            console.log('removing',interest)
        } else {
            // If the interest is not selected, add it to the array
            setSelectedInterests([...selectedInterests, interest]);
            console.log('adding',interest)
        }
    };
    
    return (
        <Container customStyle={{ paddingHorizonatal: 0 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} animated={true} />
            <Header showShadow={true} showBorderRadius={true} title={'Interest'} />
            <Text style={[style.subTitle, { marginTop: 9, marginBottom: 11 }]}>Select Your Interest</Text>
            <View style={style.box}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10,paddingHorizontal:2,marginLeft:5 }}>
                    <ImageCard
                        imageSource={item.imageSource}
                        text={item.text}
                        isSelected={selectedInterests.includes(item.id)}
                        onPress={() => handleInterestSelection(item.id)}
                    />
                    </View>
               
                )}
              
            />
            </View>
            <Button
                onPress={() => navigation.navigate('Ditary',{interest:selectedInterests,bus_data:bus_data,bus_price:bus_price})}
                btnName={'Continue'}
                disabled={false}
                loading={false}
            />
            
        </Container>
    );
};


export default Interest;


