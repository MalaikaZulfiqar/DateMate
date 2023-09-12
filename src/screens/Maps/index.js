import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapWithMarkers = () => {
  const initialMarkers = [
    { id: 1, title: 'Marker 1', latitude: 33.768051, longitude: 72.360703 },
    { id: 2, title: 'Marker 2', latitude: 33.90917, longitude: 72.49219 },
    { id: 3, title: 'Marker 3', latitude: 33.818051, longitude: 72.400703 }, // Distinct coordinates
  ];
  
  const [markers, setMarkers] = useState(initialMarkers);

  return (
    <View style={styles.container}>
      <MapView
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
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapWithMarkers;
