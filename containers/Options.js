import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Logo from '../assets/img/logo.png';

const Options = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.seachView}>
        <Image source={Logo} style={{height: 40, width: 40}}></Image>
      </View>
      <TouchableOpacity
        style={styles.cell}
        onPress={() => navigation.navigate('Contact')}>
        <Text>Nous Contacter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cell: {
    height: 80,
    // backgroundColor: 'green',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

    //paddingHorizontal: 24,
  },
  seachView: {
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Options;
