import axios from 'axios';
import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Main = (props) => {
  const fetchData_Then = () => {
    let myData = [];
    console.log('Starting Fetch...');
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log(response);
      myData = response.data;
    });
    console.log(myData);
    console.log('end fetch...');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <Button title="fetch data" onPress={fetchData_Then}></Button>
      </View>
    </SafeAreaView>
  );
};

export default Main;
