import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../components/Spacer';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={styles.card}>
      <Text style={styles.title}>create a track</Text>
      </View>
      <Spacer />
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} color='#3b5249'/>
};

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    textAlign: 'center',
    color: '#3b5249',
    
  },
  card:{
    marginTop: 30,
    backgroundColor:'#bfdcae',
    marginHorizontal: 40,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center'
  }

});

export default withNavigationFocus(TrackCreateScreen);
