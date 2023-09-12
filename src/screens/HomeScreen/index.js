import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React, { useState,useEffect } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import HomeCard from '../../components/HomeCard';
import { scale } from 'react-native-size-matters'
import { colors } from '../../constraints';
import Container from '../../components/Container';
const Home = () => {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    StatusBar.setBarStyle("transparent");
  }, []);
  
  return (
    <Container customStyle={{paddingHorizontal:0}}>
       <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <HomeCard />


      <View style={{marginTop:-150}}>

        <Calendar
          // Customize the appearance of the calendar
          style={{

            height: 350,
            margin: 12,


          }}
          // Specify the current date
          current={'2023-09-01'}
          // Callback that gets called when the user selects a day
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Mark specific dates as marked
          markedDates={{
            '2023-08-01': { selected: true, marked: true, selectedColor: colors.green },
            '2023-08-06': { selected: true, marked: true, selectedColor: colors.orange },
            '2023-08-03': { selected: true, marked: true, selectedColor: colors.red},
            '2023-08-20': { selected: true, marked: true, selectedColor: colors.red}
          }}
        />
      </View>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? StatusBar.currentHeight : 0,
   
}

})