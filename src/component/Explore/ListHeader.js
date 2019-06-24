import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ListHeader extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: 'bold',
            margin: 5,
            marginLeft: 20
          }}
        >
          {this.props.name}
        </Text>
      </View>
    );
  }
}
