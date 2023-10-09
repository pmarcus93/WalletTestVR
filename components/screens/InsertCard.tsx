import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from '../styles';

const backgroundImage = require('./../../assets/background.png');

function InsertCard() {
  return (
    <ImageBackground
      source={backgroundImage}
      style={{
        flex: 1,
        paddingHorizontal: 24,
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
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

        <View style={{gap: 10}}>
          <Text style={styles.label}>número do cartão</Text>
          <TextInput
            style={styles.textInput}
            placeholder="1234 5678 9012 3456"
            placeholderTextColor="#BBBBBB"
          />
          <Text style={styles.label}>nome do titular do cartão</Text>
          <TextInput
            style={styles.textInput}
            placeholder="José Alves Pereira"
            placeholderTextColor="#BBBBBB"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            marginTop: 12,
          }}>
          <View
            style={{
              borderStyle: 'solid',
              flex: 1,
              flexWrap: 'nowrap',
            }}>
            <Text style={{...styles.label, marginBottom: 6}}>vencimento</Text>
            <TextInput
              style={styles.textInput}
              placeholder="04/29"
              placeholderTextColor="#BBBBBB"
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{...styles.label, marginBottom: 6}}>
              código de segurança
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="***"
              placeholderTextColor="#BBBBBB"
            />
          </View>
        </View>
        <View style={{marginTop: 18}}>
          <Pressable
            onPress={() => console.log('Oi')}
            style={{
              ...styles.button,
              backgroundColor: '#12C2E9',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>avançar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default InsertCard;
