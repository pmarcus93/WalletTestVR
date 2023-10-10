import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from '../styles';

const backgroundImage = require('./../../assets/background.png');
import {MaskedTextInput} from 'react-native-mask-text';

function InsertCard() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: '#142995',
        justifyContent: 'center',
        paddingHorizontal: 24,
      }}>
      <ImageBackground source={backgroundImage}
         resizeMode="cover">
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
          <MaskedTextInput
            onChangeText={(text, rawText) => {
              console.log(text);
              console.log(rawText);
            }}
            mask="9999 9999 9999 9999"
            style={styles.textInput}
            placeholder="1234 5678 9012 3456"
            placeholderTextColor="#BBBBBB"
            keyboardType="numeric"
            autoCorrect={false}
          />
          <Text style={styles.label}>nome do titular do cartão</Text>
          <TextInput
            style={styles.textInput}
            placeholder="JOSÉ A PEREIRA"
            placeholderTextColor="#BBBBBB"
            onChangeText={text => text.toUpperCase()}
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
            <MaskedTextInput
              onChangeText={(text, rawText) => {
                console.log(text);
                console.log(rawText);
              }}
              mask="99/99"
              style={styles.textInput}
              placeholder="04/29"
              placeholderTextColor="#BBBBBB"
              keyboardType="numeric"
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{...styles.label, marginBottom: 6}}>
              código de segurança
            </Text>
            <MaskedTextInput
              onChangeText={(text, rawText) => {
                console.log(text);
                console.log(rawText);
              }}
              mask="999"
              style={styles.textInput}
              placeholder="***"
              placeholderTextColor="#BBBBBB"
              keyboardType="numeric"
              secureTextEntry={true}
              returnKeyType="next"
              enablesReturnKeyAutomatically={true}
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
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default InsertCard;
