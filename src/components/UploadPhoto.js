import React, { Component, useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Dimensions, ToastAndroid } from 'react-native';
import { colors, fonts } from '../constraints';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { API_BASE_URL, ImageURl } from '../constraints/Dimentions';

// create a component
const UploadPhoto = ({ onImageSelect, img = '', isProfileImage = false }) => {

  const [image, setImage] = useState('');
  const [tempImage, setTempImage] = useState(img || '');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTempImage(img)
  }, [img])

  const onPress = useCallback(async () => {
    const result = await ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageQuality: 0.4
    })
      .catch(() => {
        console.log('error');
      })
    if (result == undefined) {
      console.log('NO entry');
    } else {
      setLoading(true)
      const imageName = result.path.split('/')
      const imageData = {
        fileCopyUri: null,
        name: Platform.OS == 'ios' ? result.filename : imageName[imageName.length - 1],
        size: result.size,
        type: result.mime,
        uri: result.path,
      }
      setTempImage("")
      // setImage(result.path);
      try {

        const data = new FormData();
        data.append('type', 'upload_data');
        //data.append('table_name', 'users');
        data.append('file', imageData);
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
        let responseJson = await res.json()

        if (responseJson.message === 'Added Successfully') {
          setImage(result.path);
          onImageSelect(responseJson['file_name']);
          setTimeout(() => {
            setTempImage("")
          }, 500);
        }
      } catch (error) {
        // setError(true)
        ToastAndroid.show("Unable to upload image. Try again", ToastAndroid.BOTTOM)
        console.log("image can't upload", error)
      } finally {
        setLoading(false)
      }
    }
  })
  console.log(ImageURl + image)

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      {tempImage || image ? (
        <TouchableOpacity onPress={onPress}>
          <Image source={{ uri: tempImage ? ImageURl + tempImage : image }} style={styles.Avatar} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.Avatar} onPress={onPress}>
          {isProfileImage ? (
            // Show profile icon instead of camera icon
            <Icon name="user" size={50} color={colors.primaryColor} />
          ) : (
            // Show camera icon
            <Icon name="camera" size={50} color={colors.primaryColor} />
          )}
        </TouchableOpacity>
      )}

      {loading ?
        <View style={{
          position: 'absolute',
          width: 100,
          height: 100,
          backgroundColor: 'rgba(97, 97, 97, 0.59)',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ActivityIndicator
            color={colors.white} />
        </View> : null}

    </View>
  );
};


const styles = StyleSheet.create({
  Avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.inputColor,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

//make this component available to the app
export default UploadPhoto;