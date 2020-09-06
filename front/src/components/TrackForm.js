import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} buttonStyle={styles.button}/>
        ) : (
          <Button title="Start Recording" onPress={startRecording} buttonStyle={styles.button}/>
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save" onPress={saveTrack} buttonStyle={styles.button}/>
        ) : null}
      </Spacer>
    </>
  );
};

const styles=StyleSheet.create({
  button:{
    backgroundColor:'#206a5d',
    marginHorizontal: 40,
    borderRadius: 10,
    height: 50,
  }
})

export default TrackForm;
