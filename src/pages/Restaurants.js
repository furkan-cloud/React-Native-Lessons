import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {RestaurantItem} from '../components';

const Restaurants = (props) => {
  const [list, SetList] = useState([]);

  const fetchData = () => {
    axios
      .post(
        'https://worldwide-restaurants.p.rapidapi.com/search',
        {
          limit: '30',
          language: 'en_US',
          location_id: '297704',
          currency: 'USD',
        },
        {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
            'x-rapidapi-key':
              '8119e8f0acmshe49914f7daff22fp141bd1jsn639558ce4941',
          },
        },
      )
      .then((response) => SetList(response.data.results.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderList = ({item}) => {
    <RestaurantItem item={item} />;
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>
          Restaurants Page
        </Text>
      </View>
      <FlatList
        data={list}
        renderItem={renderList}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export {Restaurants};
