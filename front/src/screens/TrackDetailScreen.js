import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <View style={styles.card}>
      <Text style={styles.title}>{track.name}</Text>
      </View>
      <Spacer />
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline 
          coordinates={track.locations.map(loc => loc.coords)} 
          strokeWidth={3}
          strokeColor='#3b5249'
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 600
  },
  title:{
    fontSize: 25,
    textAlign: 'center',
    color: '#3b5249'
  },
  card:{
    marginTop: 30,
    backgroundColor:'#bfdcae',
    marginHorizontal: 15,
    borderRadius: 10,
  }
});

export default TrackDetailScreen;
