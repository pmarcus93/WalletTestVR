import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const backgroundImage = require('../../assets/background.png');
import sharedStyles from '../../shared/sharedStyles';
import homeStyles from './HomeStyles';

function Home({}) {
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      source={backgroundImage}
      style={sharedStyles.containerFluid}>
      <View style={{...sharedStyles.container}}>
        <Text style={sharedStyles.title}>Wallet Test</Text>

        <View style={{gap: 20}}>
          <Pressable
            onPress={() => navigate('MyCards')}
            style={{
              ...sharedStyles.button,
              backgroundColor: '#12C2E9',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              meus cartões
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigate('InsertCard')}
            style={{
              ...sharedStyles.button,
              backgroundColor: '#A5FF32',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#142995',
              }}>
              cadastrar cartão
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Home;
