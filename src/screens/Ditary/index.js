import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity,ImageBackground,FlatList} from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import style from '../../assets/css/style';
import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../../constraints';
import Container from '../../components/Container';
import { scale } from 'react-native-size-matters';
import ImageCard from '../../components/ImageCard';
const data=[
    { id: 'Vegetarian', imageSource: require('../../assets/images/png/vegetarian.png'), text: 'Vegetarian' },
    { id: 'Gluten free', imageSource: require('../../assets/images/png/gluten.png'), text: 'Gluten free' },
    { id: 'Dairy Free', imageSource: require('../../assets/images/png/dairy_free.png'), text: 'Dairy Free' },
    { id: 'Vegan', imageSource: require('../../assets/images/png/vegan.png'), text: 'Vegan' },
]
const Ditary = () => {
    const navigation = useNavigation();
    const route=useRoute()
    const {interest,bus_data,bus_price}=route.params
    const [selectedDitary, setSelectedDitary] = useState([]);

    const handleInterestSelection = (interest) => {
        if (selectedDitary.includes(interest)) {
            // If the interest is already selected, remove it from the array
            setSelectedDitary(selectedDitary.filter(item => item !== interest));
          
        } else {
            // If the interest is not selected, add it to the array
            setSelectedDitary([...selectedDitary, interest]);
            
        }
    };

    return (
        <Container customStyle={{ paddingHorizonatal: 0 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} animated={true} />
            <Header showShadow={true} showBorderRadius={true} title={'Ditary'} />
            <Text style={[style.subTitle, { marginTop: 9, marginBottom: 11,margin:5 }]}>Select Your Interest</Text>
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
                        isSelected={selectedDitary.includes(item.id)}
                        onPress={() => handleInterestSelection(item.id)}
                    />
                    </View>
               
                )}
              
            />
            </View>
            <Button
                 onPress={() => navigation.navigate('HealthStatus', { interest:interest,ditary: selectedDitary,bus_data:bus_data,bus_price:bus_price})}
                btnName={'Continue'}
                disabled={false}
                loading={false}
            />
        </Container>
    );
};

export default Ditary;

