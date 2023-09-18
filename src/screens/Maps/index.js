import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput, Button, ScrollView, Text, StatusBar, FlatList, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import SearchBar from '../../components/SearchBar';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { useIsFocused } from '@react-navigation/native';
import MapCard from '../../components/MapCard';
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';

const data = [
  {
    title: 'Asteria hotel',
    subtitle: 'Wilora NT 0872,Australia',
    imageSource: require('../../assets/images/png/image7.png'),
  },
  {
    title: 'Asteria hotel',
    subtitle: 'Wilora NT 0872,Australia',
    imageSource: require('../../assets/images/png/image7.png'),
  },
];

const MapWithMarkers = () => {
  const initialMarkers = [
    { id: 1, title: 'Marker 1', latitude: 33.768051, longitude: 72.360703 },
    { id: 2, title: 'Marker 2', latitude: 33.90917, longitude: 72.49219 },
    { id: 3, title: 'Marker 3', latitude: 33.818051, longitude: 72.400703 }, // Distinct coordinates
  ];
  const isFocused = useIsFocused();
  const [markers, setMarkers] = useState(initialMarkers);
  const [newMarkerTitle, setNewMarkerTitle] = useState('');
  const [newMarkerLatitude, setNewMarkerLatitude] = useState('');
  const [newMarkerLongitude, setNewMarkerLongitude] = useState('');
  const mapRef = useRef(null);

  const addMarker = () => {
    if (newMarkerTitle && newMarkerLatitude && newMarkerLongitude) {
      const newMarker = {
        id: markers.length + 1,
        title: newMarkerTitle,
        latitude: parseFloat(newMarkerLatitude),
        longitude: parseFloat(newMarkerLongitude),
      };
      setMarkers([...markers, newMarker]);
      setNewMarkerTitle('');
      setNewMarkerLatitude('');
      setNewMarkerLongitude('');

      // Optionally, you can focus on the new marker on the map
      mapRef.current.animateToRegion({
        latitude: newMarker.latitude,
        longitude: newMarker.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <View style={styles.container}>
      {isFocused ? <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" /> : null}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 33.768051,
          longitude: 72.360703,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map(marker => (
            <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
          >
            <Image
              source={require('../../assets/images/png/circle.png')}
              style={{ width: 25, height: 25 }} // Adjust the width and height as needed
            />
          </Marker>
        ))}
      </MapView>

      <View style={{ marginTop: 25 }}>
        <Header title={'Maps Location'} map={true} />
      </View>
      <SearchBar />

      <View style={styles.card}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <MapCard
              title={item.title}
              subtitle={item.subtitle}
              imageSource={item.imageSource}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    maxHeight: 200,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    margin: 10,
  },
  cardItem: {
    marginBottom: 10,
  },
});

export default MapWithMarkers;
