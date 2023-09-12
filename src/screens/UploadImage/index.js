import { StyleSheet, Text, View, StatusBar, Image, FlatList, ActivityIndicator, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker'
import Header from '../../components/Header'
import style from '../../assets/css/style'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { colors, fonts } from '../../constraints'
import Container from '../../components/Container'
import Cross from '../../assets/images/svg/cross.svg'
import { API_BASE_URL } from '../../constraints/Dimentions';
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome'
const UploadImg = () => {
    const navigation = useNavigation()
    const [galleryImages, setGalleryImages] = useState([]);
    const [imgArray, setImgArray] = useState([]);
    const [isLoading, setLoading] = useState(false)
    const handleChoosePhoto = async () => {
        const result = await ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: true,
            compressImageQuality: 0.4
        })
            .catch(() => {
                console.log('error.......');
            })
        if (result == undefined) {
            console.log('NO entry');
        } else {
            setLoading(true)

            let obj = {}
            for (let i = 0; i < result.length; i++) {
                const imageName = result[i].path.split('/')
                const imageData = {
                    fileCopyUri: null,
                    name: Platform.OS == 'ios' ? result[i].filename : imageName[imageName.length - 1],
                    size: result[i].size,
                    type: result[i].mime,
                    uri: result[i].path,
                }
                console.log('...check')
                const IDGenerate = new Date().toISOString()
                obj = { img1: imageData.uri, id: IDGenerate, loading: true, img2: true, }
                console.log('.....calling gallery')
                setGalleryImages(pre => [...pre, obj]);
                console.log('.....calling gallery..........')
                try {
                    console.log('setting gallery')
                    const data = new FormData();
                    data.append('type', 'upload_data');
                    //data.append('table_name', 'dishes');
                    data.append('file', imageData);
                    console.log('....................................')
                    let res = await fetch(

                        API_BASE_URL,
                        {
                            method: 'post',
                            body: data,
                            headers: {
                                'Content-Type': 'multipart/form-data; ',
                            },
                        }

                    );
                    console.log(res)
                    let responseJson = await res.json()
                    console.log('Response JSON:', responseJson);

                    if (responseJson.result) {
                        obj = { img1: imageData.uri, img: responseJson['file_name'], id: IDGenerate, loading: false, img2: true, }
                        setGalleryImages(oldImages => {
                            return oldImages.map(oldImage =>
                                oldImage.id == IDGenerate ? { ...oldImage, ...obj } : oldImage
                            )
                        });
                        console.log(responseJson)
                    }
                    else {
                        console.log('cant load images')
                    }
                } catch (error) {
                    console.log('error in uploading:', error)
                    obj = { img1: imageData.uri, id: IDGenerate, loading: false, img2: true, }

                    setGalleryImages(oldImages => {
                        return oldImages.filter(oldImage =>
                            oldImage.id !== IDGenerate
                        )
                    });
                }
            }
            setLoading(false)
        }
    }

    const handleDeletePhoto = i => {
        let filterImages = galleryImages.filter(item => String(item.id) !== String(i.id));
        setGalleryImages(filterImages);
    };
    const renderItem = ({ item }) => {
        return (
            <>
                <View style={{  }}>
                    <Image
                        source={{ uri: item.img2 ? item.img1 : API_BASE_URL + item?.img1 }}
                        style={{
                            width: scale(110),
                            height: scale(114),
                            borderRadius: scale(8),
                            // backgroundColor: colors.neutralDarkSeven
                        }}
                    />
                </View>
                {item?.loading ?
                    <View style={{
                        position: 'absolute', 
                        marginHorizontal: scale(20),
                        width: scale(122),
                        height: scale(114),
                        backgroundColor: 'rgba(97, 97, 97, 0.59)', borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <ActivityIndicator color={colors.white} />
                    </View>

                    :
                    <TouchableOpacity
                        onPress={() => handleDeletePhoto(item)}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            padding: scale(3),
                            paddingRight: scale(3),
                            backgroundColor: 'white',
                            borderRadius: 18,
                            borderColor: colors.primaryColor,
                            borderWidth: 1
                        }}
                    >

                        <Icon name="times" size={10} color={colors.primaryColor} />
                    </TouchableOpacity>

                }

            </>

        )
    }
    console.log(galleryImages)
    return (
        <Container >
            <StatusBar barStyle={'dark-content'}
                backgroundColor={colors.white}
                animated={true} />
                <Header title={'Upload Image'} showShadow={true} showBorderRadius={true}/>  
            <View style={[style.box,{paddingHorizontal:0}]}>
           
                <Text style={[style.subTitle,{marginTop:25}]}>Upload Images of your Business</Text>
                <Text style={[style.subTitle, { color: colors.gray, fontSize: 14 }]}>Ads with pictures get 5x more views and leads Upload good quality pictures with proper lighting Cover all areas of your Business</Text>



                <View style={styles.dottedLine}>
                    <Button
                        onPress={handleChoosePhoto}
                        btnName={'      Upload a Photo     '}
                        disabled={false}
                        loading={false}
                    />
                </View>
                <Text style={[style.subTitle]}>Preview</Text>
                <View style={{ flexDirection: 'row', justifyContent:'space-between', marginBottom: 20 }}>
                    <Image source={require('../../assets/images/png/room1.png')} />
                    <Image source={require('../../assets/images/png/room2.png')} />
                    <Image source={require('../../assets/images/png/room3.png')} />

                </View>
                <FlatList
                    horizontal
                    data={galleryImages}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item, index) => item.id}
                />




            </View>
            <Button
                onPress={() => navigation.navigate('BookingBar')}
                btnName={'Continue'}
                disabled={false}
                loading={false}
            />
        </Container>

    )
}

export default UploadImg

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    dottedLine: {
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderStyle: 'dashed',
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },

})