import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

const PostCard = (props) => {
  return (
    <TouchableWithoutFeedback
    onPress={() => props.onSelect()}
    >
      <View>
        <Image style={styles.image} source={{uri: props.post.img}} />
        <View style={styles.footerContainer}>
          <Text>{props.post.userName}</Text>
          <Text numberOfLines={2}>{props.post.description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 3,
  },
  footerContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
