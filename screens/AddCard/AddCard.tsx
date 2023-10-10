import React, {useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

const backgroundImage = require('../../assets/background.png');
import {MaskedTextInput} from 'react-native-mask-text';
import CreditCard from '../../models/CreditCard';
import {insertCard} from '../../components/api';
import styles from './AddCardStyles';
import sharedStyles from '../../shared/sharedStyles';

function AddCard() {
  const [creditCard, setCreditCard] = useState<CreditCard>({
    id: '',
    cvv: '',
    color: '',
    number: '',
    name: '',
    title: '',
    expirationDate: '',
  });

  const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleChange = (key: keyof CreditCard, value: String) => {
    setCreditCard({
      ...creditCard,
      [key]: value,
    });
    console.log(creditCard);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover">
        <Text style={sharedStyles.title}>Wallet Test</Text>
        <View style={{gap: 10}}>
          <Text style={sharedStyles.label}>número do cartão</Text>
          <MaskedTextInput
            onChangeText={(text, rawText) => {
              handleChange('number', text);
            }}
            mask="9999 9999 9999 9999"
            style={sharedStyles.textInput}
            placeholder="1234 5678 9012 3456"
            placeholderTextColor="#BBBBBB"
            keyboardType="numeric"
            autoCorrect={false}
            value={creditCard.number}
          />
          <Text style={sharedStyles.label}>nome do titular do cartão</Text>
          <TextInput
            style={sharedStyles.textInput}
            placeholder="JOSÉ A PEREIRA"
            placeholderTextColor="#BBBBBB"
            onChangeText={text => {
              handleChange('name', text);
            }}
            value={creditCard.name}
          />
        </View>
        <View style={sharedStyles.rowContainer}>
          <View
            style={{
              borderStyle: 'solid',
              flex: 1,
              flexWrap: 'nowrap',
            }}>
            <Text style={{...sharedStyles.label, marginBottom: 6}}>
              vencimento
            </Text>
            <MaskedTextInput
              onChangeText={text => {
                handleChange('expirationDate', text);
              }}
              mask="99/99"
              style={sharedStyles.textInput}
              placeholder="04/29"
              placeholderTextColor="#BBBBBB"
              keyboardType="numeric"
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{...sharedStyles.label, marginBottom: 6}}>
              código de segurança
            </Text>
            <MaskedTextInput
              onChangeText={text => {
                handleChange('cvv', text);
              }}
              mask="999"
              style={sharedStyles.textInput}
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
            onPress={() => {
              const randomHexColor = getRandomHexColor();
              setCreditCard({
                ...creditCard,
                color: randomHexColor,
                title: 'Card #' + randomHexColor,
              });
              insertCard(creditCard);
            }}
            style={{
              ...sharedStyles.button,
              backgroundColor: '#12C2E9',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>avançar</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default AddCard;
