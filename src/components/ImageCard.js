import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { colors } from '../constraints';
import { scale } from 'react-native-size-matters';

const ImageCard = ({ imageSource, text, isSelected, onPress }) => {
    const borderStyle = isSelected ? { borderColor: colors.primaryColor, borderWidth: 3 } : null;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.imageContainer, borderStyle]}>
                <ImageBackground source={imageSource} style={[styles.imgStyle]}>
                    <View style={styles.blackOverlay}>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

export default ImageCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '900',
        top: 30,
        position: 'absolute'
    },
    imgStyle: {
        height: scale(85),
        width: scale(85),
    },
    blackOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
