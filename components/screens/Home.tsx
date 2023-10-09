import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import styles from '../styles';
const backgroundImage = require('./../../assets/background.png');

function Home({navigation}) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={{
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: '#142995',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 24,
          gap: 10,
        }}>
        <Text
          style={{
            fontSize: 32,
            color: '#ffffff',
            paddingBottom: 12,
            alignSelf: 'center',
          }}>
          Wallet Test
        </Text>

        <View
          style={{
            gap: 20,
          }}>
          <Pressable
            onPress={() => navigation.navigate('MyCards')}
            style={{
              ...styles.button,
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
            onPress={() => navigation.navigate('InsertCard')}
            style={{
              ...styles.button,
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
