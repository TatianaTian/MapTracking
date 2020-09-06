import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Button title="Sign Out" onPress={signout} buttonStyle={styles.button}/>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} color='#3b5249'/>
};

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#206a5d',
    marginHorizontal: 40,
    borderRadius: 10,
    height: 50,
  }
});

export default AccountScreen;
