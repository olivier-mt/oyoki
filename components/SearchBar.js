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

const SearchBar = ({setCategory, category}) => {
  //const [allBrandActivated, setAllBrandActivated] = useState(false);
  //const [modeActivated, setModeActivated] = useState(false);
  //const [cosmeticActivated, setCosmeticActivated] = useState(false);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.searchView}
      contentContainerStyle={{alignItems: 'center'}}>
      <Image source={Logo} style={{height: 40, width: 40, margin: 10}} />

      <TouchableOpacity
        style={category === '' ? styles.buttonActivated : styles.button}
        onPress={() => {
          setCategory('');
        }}>
        <Text style={category === '' ? styles.textActivated : styles.text}>
          Toutes les marques
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={category === 'mode' ? styles.buttonActivated : styles.button}
        onPress={() => {
          setCategory('mode');
        }}>
        <Text style={category === 'mode' ? styles.textActivated : styles.text}>
          Mode
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={category === 'beauty' ? styles.buttonActivated : styles.button}
        onPress={() => {
          setCategory('beauty');
        }}>
        <Text
          style={category === 'beauty' ? styles.textActivated : styles.text}>
          Beauty
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCategory('houseItem');
        }}>
        <Text
          style={category === 'houseItem' ? styles.textActivated : styles.text}>
          Maison
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCategory('accessories');
        }}>
        <Text>Bijoux et accessoires</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchView: {
    //  backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    height: 40,
  },
  button: {
    // borderColor: 'black',
    marginRight: 10,
    height: 40,
    justifyContent: 'center',
  },
  buttonActivated: {
    marginRight: 10,
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    //backgroundColor: 'yellow',
  },
  text: {
    fontFamily: 'Ruda-SemiBold',
    color: 'rgba(155, 155, 155, 1)',
  },
  textActivated: {
    fontFamily: 'Ruda-SemiBold',
    color: 'black',
  },
});

export default SearchBar;
