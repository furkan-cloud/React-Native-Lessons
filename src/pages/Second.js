import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Second = (props) => {
const userNumber = props.route.params.selectedValue

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40, marginHorizontal: 20}}>Second Page</Text>
        <Text style={{fontSize: 40, marginHorizontal: 20}}>Gelen Değer: {userNumber}</Text>
        <Button
        title="Back"
        onPress={() => props.navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Second;
