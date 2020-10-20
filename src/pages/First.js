import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const First = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>First</Text>
        <Button
        title="Second Page"
        onPress={() => props.navigation.navigate("SecondPage")}
        />
      </View>
    </SafeAreaView>
  );
};

export default First;
