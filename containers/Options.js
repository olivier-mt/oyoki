import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faBars,
  faUser,
  faEnvelope,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

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
      <View style={styles.header}>
        <Image source={Logo} style={{height: 40, width: 40}}></Image>
      </View>
      <TouchableOpacity
        style={styles.cell}
        onPress={() =>
          navigation.navigate('Contact', {
            url: 'https://www.oyoki.fr/contact-8',
          })
        }>
        <FontAwesomeIcon icon={faQuestionCircle} size={20} color="black" />
        <Text style={styles.text}>Nous Contacter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cell: {
    height: 80,
    //backgroundColor: 'green',
    //justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginLeft: 15,
    //display: 'flex',
    //flexDirection: 'column',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    //paddingHorizontal: 24,
  },

  text: {
    marginLeft: 10,
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },

  header: {
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    //color: 'grey',
  },
});

export default Options;
