import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

const backgroundImage = require('./../../assets/background.png');

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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    paddingVertical: 10,
    borderRadius: 12,
  },
});

function Home({navigation}) {
  return (
    <ImageBackground
      source={backgroundImage}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          gap: 10,
          ...styles,
        }}>
        <Text
          style={{
            fontSize: 32,
            color: '#ffffff',
            paddingBottom: 12,
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
