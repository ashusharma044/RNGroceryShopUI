import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image
} from 'react-native';

import * as images from '../assets/images';
import CustomIcon from './CustomIcon';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#009393'
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => alert('location clicked')}
            >
              <CustomIcon name='location' size={25} color={'#fff'} />
            </TouchableOpacity>
            <View>
              <Text style={{ color: '#fff', marginLeft: 5 }}>
                Mehroli, South Delhi
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: '#555',
              overflow: 'hidden',
              marginRight: 10
            }}
          >
            <Image
              source={images.img.userImg}
              style={{
                flex: 1,
                width: 50,
                height: 50,
                resizeMode: 'cover'
              }}
            />
          </View>
        </View>
        <View />
        <View style={{ margin: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingHorizontal: 10
            }}
          >
            <CustomIcon name='search' size={18} color={'#009393'} />
            {/* <Icon
              style={{
                padding: 10
              }}
              name='ios-search'
              size={20}
              color='#000'
            /> */}
            <TextInput
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 10,
                backgroundColor: '#fff',
                color: '#424242'
              }}
              placeholderTextColor='#009393'
              placeholder='Search'
              onChangeText={searchString => {
                this.setState({ searchString });
              }}
              underlineColorAndroid='transparent'
            />
            <TouchableOpacity onPress={() => alert('menu clicked')}>
              <CustomIcon name='menu' size={18} color={'#009393'} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
