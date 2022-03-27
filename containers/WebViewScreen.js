import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import firestore from '@react-native-firebase/firestore';
import {WebView} from 'react-native-webview';
import * as Progress from 'react-native-progress';
import {Svg} from 'react-native-svg';

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

const WebViewScreen = ({route}) => {
  console.log('PARAMS', route.params);

  const {url} = route.params;

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}>
      {loading && (
        <Progress.Bar
          progress={progress}
          width={null}
          height={5}
          animated={true}
          borderRadius={0}
          borderWidth={0}
        />
      )}
      <WebView
        source={{uri: url}}
        // style={{marginTop: 20}}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadProgress={event => {
          setProgress(event.nativeEvent.progress);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
  },
  img: {
    height: 300,
  },
  greyView: {
    height: 31,
    backgroundColor: 'rgba(229, 229, 229, 0.24)',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  safeArea: {
    backgroundColor: 'rgb(255, 255, 255)',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  instaView: {
    backgroundColor: 'green',
    height: 20,
  },
  littlePicture: {
    height: 150,
    width: 150,
    margin: 1,
  },
  imgView: {
    backgroundColor: 'blue',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  webSiteBtn: {
    position: 'absolute',
    backgroundColor: 'green',
    bottom: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default WebViewScreen;
