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

import BrandCard from '../components/BrandCard';

const HomeScreen = ({navigation}) => {
  const [finalBrands, setFinalBrands] = useState();

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

  console.log('final brands', finalBrands);

  return finalBrands && finalBrands.length > 1 ? (
    <SafeAreaView>
      <View style={styles.seachView}></View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {displayBrands()}
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
  seachView: {
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: 'grey',
  },
  highlight: {
    fontWeight: '700',
  },
  img: {
    height: 300,
    width: 300,
  },
});

export default HomeScreen;
