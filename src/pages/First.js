import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, TextInput} from 'react-native';

const number = 100;

const First = (props) => {
    const [userName, setUserName] = useState("")
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 40, marginHorizontal: 20}}>Girilen Değer: {userName}</Text>
        <View style={{backgroundColor: "lightgrey", margin: 20, borderRadius: 10}}>
            <TextInput
            value={userName}
            onChangeText={text => setUserName(text)}
            />
        </View>
        <Text style={{fontSize: 40, marginHorizontal: 20}}>{number}</Text>
        <Button
        title="Second Page"
        onPress={() => props.navigation.navigate("SecondPage", {selectedValue: userName})}
        />
      </View>
    </SafeAreaView>
  );
};

export default First;
