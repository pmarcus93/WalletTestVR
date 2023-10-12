import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import CreditCard from '../../models/CreditCard';
import {Pressable, Text, TextInput, View} from 'react-native';
import sharedStyles from '../../shared/sharedStyles';
import {MaskedTextInput} from 'react-native-mask-text';
import {getRandomColor, VALIDATION_REGEXES} from '../../shared/helpers';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { COLORS } from "../../shared/defaults";
import { insertCard } from "../../components/api";

function FormCard() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreditCard>();

  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onSubmit = async (data: CreditCard) => {
    const {color, colorName} = getRandomColor();
    data.color = color;
    data.title = 'Cartão ' + colorName;
    await insertCard(data);
    navigate('CardInserted', {
      creditCard: data,
    });
  };

  return (
    <View style={[{gap: 10}]}>
      <Text style={sharedStyles.title}>Wallet Test</Text>
      <Text style={sharedStyles.label}>número do cartão</Text>
      <Controller
        control={control}
        name="number"
        rules={{
          required: true,
          pattern: VALIDATION_REGEXES.CREDIT_CARD_NUMBER,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <MaskedTextInput
            mask="9999 9999 9999 9999"
            style={sharedStyles.textInput}
            placeholder="1234 5678 9012 3456"
            placeholderTextColor={COLORS.placeholder}
            keyboardType="numeric"
            autoCorrect={false}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.number && <Text>Campo obrigatório.</Text>}

      <Text style={sharedStyles.label}>nome do titular do cartão</Text>
      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={sharedStyles.textInput}
            placeholder="JOSÉ A PEREIRA"
            placeholderTextColor="#BBBBBB"
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      {errors.name && <Text>Campo obrigatório.</Text>}
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

          <Controller
            name="expirationDate"
            control={control}
            rules={{
              required: true,
              pattern: VALIDATION_REGEXES.CREDIT_CARD_EXPIRATION_DATE,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <MaskedTextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                mask="99/99"
                style={sharedStyles.textInput}
                placeholder="04/29"
                placeholderTextColor="#BBBBBB"
                keyboardType="numeric"
              />
            )}
          />

          {errors.expirationDate && <Text>Campo obrigatório.</Text>}
        </View>

        <View style={{flex: 1}}>
          <Text style={{...sharedStyles.label, marginBottom: 6}}>
            código de segurança
          </Text>

          <Controller
            name="cvv"
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <MaskedTextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                mask="999"
                style={sharedStyles.textInput}
                placeholder="***"
                placeholderTextColor="#BBBBBB"
                keyboardType="numeric"
                secureTextEntry={true}
                returnKeyType="next"
                enablesReturnKeyAutomatically={true}
              />
            )}
          />
          {errors.cvv && <Text>Campo obrigatório.</Text>}
        </View>
      </View>

      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={{
          ...sharedStyles.button,
          backgroundColor: '#12C2E9',
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>avançar</Text>
      </Pressable>
    </View>
  );
}

export default FormCard;