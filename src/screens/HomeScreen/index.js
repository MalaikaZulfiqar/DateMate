import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, BackHandler } from 'react-native';
import { Calendar } from 'react-native-calendars';
import HomeCard from '../../components/HomeCard';
import { scale } from 'react-native-size-matters';
import { colors } from '../../constraints';
import Container from '../../components/Container';
import { useIsFocused } from '@react-navigation/native';
import { BottomSheetModalProvider, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetModal as BottomSheet } from '@gorhom/bottom-sheet';
import style from '../../assets/css/style';
import { format } from 'date-fns';

const Home = () => {
  const [selected, setSelected] = useState('');
  const isFocused = useIsFocused();
  const bottomSheetModalRef = useRef(null);

  const openBottomSheet = (date) => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
      setSelected(date);
    }
  };

  const closeBottomSheet = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.dismiss();
      setSelected('');
    }
  };

  const formattedSelectedDate = selected ? format(new Date(selected), 'dd MMM') : '';

  useEffect(() => {
    const backAction = () => {
     bottomSheetModalRef.current.close()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
    }, []);

  return (
    <BottomSheetModalProvider>
      <Container customStyle={{ paddingHorizontal: 0 }}>
        {isFocused ? <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" animated={true} /> : null}
        <HomeCard />
        <View style={styles.calendarContainer}>
          <Calendar
            current={'2023-09-01'}
            onDayPress={(day) => openBottomSheet(day.dateString)}
            markedDates={{
              '2023-08-01': { selected: true, marked: true, selectedColor: colors.green },
              '2023-08-06': { selected: true, marked: true, selectedColor: colors.orange },
              '2023-08-03': { selected: true, marked: true, selectedColor: colors.red },
              '2023-08-20': { selected: true, marked: true, selectedColor: colors.red },
            }}
          />
        </View>
      </Container>
      <BottomSheet
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={['50%', '50%']}
        backdropComponent={(backdropProps) => (
          <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
        )}
      >
        <View style={styles.bottomSheetContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={closeBottomSheet}>
              <Image source={require('../../assets/images/png/close.png')} style={styles.closeButton} />
            </TouchableOpacity>
          </View>
          <View style={styles.centerContent}>
            <Text style={style.lableStyle}>{formattedSelectedDate}</Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.leftContent}>
              <Image source={require('../../assets/images/png/hotel.png')} style={styles.cardImage} />
            </View>
            <View style={styles.rightContent}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[style.lableStyle, { marginTop: 0, marginBottom: 0, margin: 0, fontSize: 13 ,fontWeight:'bold'}]}>
                  Meliá Madrid
                </Text>
                <Text style={[style.lableStyle, { marginTop: 2, marginBottom: 0, margin: 0, fontSize: 11 }]}>
                  5:00Pm To 12:00Pm
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Table No 3</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectButton}>
                  <Text style={[styles.buttonText],{color:colors.primaryColor}}>Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.leftContent}>
              <Image source={require('../../assets/images/png/hotel.png')} style={styles.cardImage} />
            </View>
            <View style={styles.rightContent}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[style.lableStyle, { marginTop: 0, marginBottom: 0, margin: 0, fontSize: 13 ,fontWeight:'bold'}]}>
                  Meliá Madrid
                </Text>
                <Text style={[style.lableStyle, { marginTop: 2, marginBottom: 0, margin: 0, fontSize: 11 }]}>
                  5:00Pm To 12:00Pm
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Table No 3</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectButton}>
                  <Text style={[styles.buttonText],{color:colors.primaryColor}}>Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  closeButton: {
    width: 24,
    height: 24,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    width: scale(315),
  },
  leftContent: {
    marginRight: 10,
  },
  rightContent: {
    marginTop:6
  },
  cardImage: {
    width: scale(100),
    height: scale(85),
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 60,
    marginTop: 10,
    marginBottom: 6,
  },
  acceptButton: {
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 27,
  },
  rejectButton: {
    backgroundColor: colors.white,
    borderRadius: 5,
    borderColor: colors.primaryColor,
    borderWidth: 1,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 27,
    marginLeft: 4,
  },
  buttonText: {
    color: 'white',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    height: 350,
    marginTop: 250,
    margin: 12,
    width: '90%',
    position: 'absolute',
  },
  centerContent: {
    alignItems: 'center',
    marginTop: -10,
  },
  selectedDate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
