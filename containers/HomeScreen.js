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
import SearchBar from '../components/SearchBar';
import BrandCard from '../components/BrandCard';
import Logo from '../assets/img/logo.png';

const HomeScreen = ({navigation}) => {
  const [finalBrands, setFinalBrands] = useState();
  const [category, setCategory] = useState('');

  useEffect(() => {
    const getBrands = async () => {
      const brands = await firestore().collection('BRANDS').get();
      const articles = await firestore()
        .collection('BRANDS')
        .doc('mawu')
        .collection('ARTICLES')
        .get();

      //
      // console.log('brandss', brands._docs['0']._data.main_picture);

      console.log('brandss', brands._docs);

      // console.log('articles', articles._docs);

      setFinalBrands(brands._docs);
    };

    getBrands();
  }, []);

  const displayBrands = () => {
    const brands = [];

    for (let i = 0; i < finalBrands.length; i++) {
      brands.push(
        <BrandCard
          key={i}
          finalBrands={finalBrands}
          i={i}
          navigation={navigation}
        />,
      );
    }

    return brands;
  };

  const displayFilteredBrands = () => {
    const brands = [];

    for (let i = 0; i < finalBrands.length; i++) {
      // console.log('final brand i', finalBrands[i]);
      if (finalBrands[i]._data.category === category) {
        brands.push(
          <BrandCard
            key={i}
            finalBrands={finalBrands}
            i={i}
            navigation={navigation}
          />,
        );
      }
    }

    console.log('the brands ', brands);

    return brands;
  };

  console.log('final brands', finalBrands);

  return finalBrands && finalBrands.length > 1 ? (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Image
          source={Logo}
          style={{height: 40, width: 40, margin: 10}}></Image>

        <SearchBar setCategory={setCategory} />
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {category === '' ? displayBrands() : displayFilteredBrands()}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>okok</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  header: {
    height: 60,
    // backgroundColor: 'yellow',
    borderBottomColor: 'grey',
    //justifyContent: 'center',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  highlight: {
    fontWeight: '700',
  },
  img: {
    height: 300,
    width: 300,
    color: 'red',
  },
});

export default HomeScreen;
