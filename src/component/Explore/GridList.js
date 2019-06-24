import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default class GridList extends Component {
  render() {
    return (
      <View style={styles.mainWrapper}>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 18 }}>{this.props.title}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: this.props.imageUri }} style={styles.imgCls} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 20,

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  imgCls: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
});
