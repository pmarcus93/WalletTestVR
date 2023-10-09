import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

function MyCards() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

  const fetchData = () => {
    setLoading(true);

    axios
      .get('http://10.0.0.108:3000/cards')
      .then(response => {
        setCardData(response.data);
        setLoading(false);
        console.log(cardData);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#142995',
      }}>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            padding: 20,
            color: '#12C2E9',
          }}>
          Meus Cartões
        </Text>
      </View>
      <View>
        {loading ? (
          <Text>Loading... </Text>
        ) : (
          cardData.map(item => (
            <Text key={item.id}>{item.number}</Text>
          ))
        )}
      </View>
    </View>
  );
}

export default MyCards;
