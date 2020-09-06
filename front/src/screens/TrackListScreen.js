import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Badge } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import TouchableScale from 'react-native-touchable-scale'; 
import LinearGradient from 'react-native-linear-gradient';
import Spacer from '../components/Spacer';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Spacer />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })}
         
            >
              <ListItem 
                
                linearGradientProps={{
                  colors: ['#bfdcae', '#197163'],
                  start: { x: 1, y: 0 },
                  end: { x: 0.2, y: 0 }
                }}
                containerStyle = {styles.card}
                >
                  <ListItem.Chevron />
                  <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                    {item.name}
                  </ListItem.Title>
                </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'Tracks'
};

const styles = StyleSheet.create({
  card:{
    borderBottomColor:'white',
    borderBottomWidth:1,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    height:100
  }
});

export default TrackListScreen;
