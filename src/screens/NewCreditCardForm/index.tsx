import React, {useState} from 'react';
import {Alert, Pressable, Text, View} from 'react-native';

import {useForm} from 'react-hook-form';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {insertCard} from '@api/CreditCardApi';

import CreditCardModel from '@models/CreditCardModel';

import {ERROR_MESSAGES} from '@shared/defaults';
import globalStyles from '@shared/globalStyles';
import {VALIDATION_REGEXES, getRandomColor} from '@shared/helpers';

import CreditCard from '@components/CreditCard';
import FormControlInput from '@components/FormControlInput';
import {
  Subtitle,
  Title,
  ViewGap10,
} from '@components/StyledComponents/StyledComponents';

function FormCard() {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<CreditCardModel>();

  const [submited, setSubmitted] = useState(false);
  const [insertedCreditCard, setInsertedCreditcard] = useState<CreditCardModel>(
    {} as CreditCardModel,
  );
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onSubmit = async (data: CreditCardModel) => {
    try {
      const {color, colorName} = getRandomColor();
      data.color = color;
      data.title = 'Cartão ' + colorName;
      await insertCard(data);
      setInsertedCreditcard(data);
      setSubmitted(true);
    } catch (e) {
      Alert.alert(ERROR_MESSAGES.API.title, ERROR_MESSAGES.API.message, [
        {
          text: 'OK',
          onPress: () => {
            navigate('Home');
          },
        },
      ]);
    }
  };

  if (!submited) {
    return (
      <>
        <ViewGap10>
          <Title>Wallet Test</Title>
          <FormControlInput
            control={control}
            errors={errors}
            keyboardType="numeric"
            label={'número do cartão'}
            mask="9999 9999 9999 9999"
            name="number"
            placeholder="1234 5678 9012 3456"
            rules={{
              pattern: VALIDATION_REGEXES.CREDIT_CARD_NUMBER,
              required: true,
            }}
          />

          <FormControlInput
            control={control}
            errors={errors}
            label="nome do titular do cartão"
            mask={undefined}
            name="name"
            placeholder="JOSÉ A PEREIRA"
            rules={{required: true}}
            autoCapitalize="characters"
          />

          <View style={globalStyles.rowContainer}>
            <View
              style={{
                borderStyle: 'solid',
                flex: 1,
                flexWrap: 'nowrap',
              }}>
              <FormControlInput
                control={control}
                errors={errors}
                keyboardType="numeric"
                label="vencimento"
                mask="99/99"
                name="expirationDate"
                placeholder="04/29"
                rules={{
                  pattern: VALIDATION_REGEXES.CREDIT_CARD_EXPIRATION_DATE,
                  required: true,
                }}
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
                keyboardType="numeric"
                secureTextEntry={true}
              />
            </View>
          </View>

          <Pressable
            onPress={handleSubmit(onSubmit)}
            style={{
              ...globalStyles.button,
              backgroundColor: '#12C2E9',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>avançar</Text>
          </Pressable>
        </ViewGap10>
      </>
    );
  } else {
    return (
      <>
        <View style={globalStyles.container}>
          <Title>Wallet Test</Title>
          <Subtitle>cartão cadastrado com sucesso</Subtitle>
          <CreditCard creditCard={insertedCreditCard} />

          <Pressable
            onPress={() => {
              navigate('CardsListing');
            }}
            style={{
              ...globalStyles.button,
              backgroundColor: '#12C2E9',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>avançar</Text>
          </Pressable>
        </View>
      </>
    );
  }
}

export default FormCard;
