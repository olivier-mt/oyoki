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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
      console.log('brandss', brands._docs['0']._data.main_picture);
      // console.log('articles', articles._docs);

      setFinalBrands(brands._docs);
    };

    getBrands();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return finalBrands ? (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TouchableHighlight onPress={() => navigation.navigate('Details')}>
          <Image
            style={styles.img}
            source={{uri: finalBrands['0']._data.main_picture}}
            onPress={() => console.log('ok')}
          />
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
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
  highlight: {
    fontWeight: '700',
  },
  img: {
    height: 300,
    width: 300,
  },
});

export default HomeScreen;
