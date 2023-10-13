import React from 'react';
import {useForm} from 'react-hook-form';
import CreditCardModel from '../../models/CreditCardModel';
import {Pressable, Text, View} from 'react-native';
import sharedStyles from '../../shared/sharedStyles';
import {getRandomColor, VALIDATION_REGEXES} from '../../shared/helpers';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {insertCard} from '@api/CreditCardApi';
import FormControlInput from '@components/FormControlInput';

function FormCard() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreditCardModel>();

  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onSubmit = async (data: CreditCardModel) => {
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
      <FormControlInput
        control={control}
        errors={errors}
        label={'número do cartão'}
        name="number"
        placeholder="1234 5678 9012 3456"
        mask="9999 9999 9999 9999"
        rules={{
          pattern: VALIDATION_REGEXES.CREDIT_CARD_NUMBER,
          required: true,
        }}
        keyboardType="numeric"
      />

      <FormControlInput
        control={control}
        errors={errors}
        label="nome do titular do cartão"
        name="name"
        placeholder="JOSÉ A PEREIRA"
        rules={{required: true}}
        keyboardType="default"
        mask={undefined}
      />

      <View style={sharedStyles.rowContainer}>
        <View
          style={{
            borderStyle: 'solid',
            flex: 1,
            flexWrap: 'nowrap',
          }}>
          <FormControlInput
            control={control}
            errors={errors}
            label="vencimento"
            name="expirationDate"
            keyboardType="numeric"
            rules={{
              pattern: VALIDATION_REGEXES.CREDIT_CARD_EXPIRATION_DATE,
              required: true,
            }}
            placeholder="04/29"
            mask="99/99"
          />
        </View>

        <View style={{flex: 1}}>
          <FormControlInput
            control={control}
            errors={errors}
            label="código de segurança"
            mask="999"
            name="cvv"
            placeholder="***"
            rules={{
              required: true,
            }}
            secureTextEntry={true}
          />
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
