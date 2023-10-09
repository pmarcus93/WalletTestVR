import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
});

function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...styles,
      }}>
      <Text>
        Wallet Test
      </Text>
      <Button
        title="meus cartões"
        onPress={() => navigation.navigate('MyCards')}
        accessibilityLabel="botão para navegar à lista de botões cadastrados"
      />

      <Button
        title="cadastrar cartão"
        onPress={() => navigation.navigate('InsertCard')}
        accessibilityLabel="botão para navegar à tela de cadastro de cartão"
      />
    </View>
  );
}

export default Home;
