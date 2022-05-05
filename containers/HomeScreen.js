import React, {useState, useEffect, useCallback} from 'react';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
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
  RefreshControl,
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

import * as Progress from 'react-native-progress';

const HomeScreen = ({navigation}) => {
  const [finalBrands, setFinalBrands] = useState();
  const [category, setCategory] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.data,
      );
      const {internal_name} = remoteMessage.data;
      if (internal_name) {
        navigation.navigate('Details', {internal_name});
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.data,
          );
          const {internal_name} = remoteMessage.data;
          if (internal_name) {
            navigation.navigate('Details', {internal_name});
          }
        }
      });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getBrands().then(() => {
      setRefreshing(false);
    });
  }, []);

  const getBrands = async () => {
    const brands = await firestore().collection('BRANDS').get();
    // const articles = await firestore()
    //   .collection('BRANDS')
    //   .doc('mawu')
    //   .collection('ARTICLES')
    //   .get();

    //
    // console.log('brandss', brands._docs['0']._data.main_picture);

    // console.log('brandss', brands._docs);

    // console.log('articles', articles._docs);

    setFinalBrands(brands._docs);
  };

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

    // console.log('the brands ', brands);

    return brands;
  };

  //console.log('final brands', finalBrands);

  return finalBrands && finalBrands.length > 1 ? (
    <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
      <View style={styles.header}>
        <SearchBar setCategory={setCategory} category={category} />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentInsetAdjustmentBehavior="automatic">
        {category === '' ? displayBrands() : displayFilteredBrands()}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Progress.Circle size={40} indeterminate={true} />
      </View>
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
