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

import SearchBarBtn from '../components/SearchBarBtn';

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

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={''}
        text={'Toutes les marques'}
      />

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'mode'}
        text={'Mode'}
      />

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'beauty'}
        text={'Cosmétique'}
      />

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'houseItem'}
        text={'Maison'}
      />

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'accessories'}
        text={'Bijoux & Accessoires'}
      />

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'stationery'}
        text={'Papeterie'}
      />

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'grocery'}
        text={'Épicerie'}
      />

      {/*
      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'tech'}
        text={'High-Tech'}
      /> */}

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'leisure'}
        text={'Loisir'}
      />

      <SearchBarBtn
        category={category}
        setCategory={setCategory}
        data={'kids'}
        text={'Kids'}
      />
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
    fontFamily: 'Ruda-Bold',
    color: 'rgba(155, 155, 155, 1)',
    fontSize: 16,
  },
  textActivated: {
    fontFamily: 'Ruda-Bold',
    color: 'black',
    fontSize: 16,
  },
});

export default SearchBar;
