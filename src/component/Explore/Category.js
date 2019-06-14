import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default class category extends Component {
  render() {
    return (
      <View
        style={{
          width: screenWidth,
          height: screenHeight - 600,
          shadowColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
          shadowOffset: {
            width: 1,
            height: 3
          },
          shadowOpacity: 0.6,
          shadowRadius: 5,

          elevation: 17
        }}
      >
        <View
          style={{
            width: screenWidth - 40,
            height: screenHeight - 620,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderColor: '#F44336',
            overflow: 'hidden'
          }}
        >
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
          />
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(255,0,0,0)'
            }}
          />
          {this.props.myPropsVal == '1' ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                margin: 10,

                ...StyleSheet.absoluteFillObject
              }}
            >
              <Text
                style={{
                  color: '#750f26',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.props.title}
              </Text>
              <Text
                style={{
                  color: '#750f26',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.props.subTitle}
              </Text>
              <TouchableOpacity
                onPress={() => alert('this is first button')}
                style={{
                  backgroundColor: '#009393',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 15,
                    paddingLeft: 15
                  }}
                >
                  {this.props.btnTitle}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                margin: 10,
                paddingTop: 10,

                ...StyleSheet.absoluteFillObject
              }}
            >
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.props.title}
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.props.subTitle}
              </Text>
              <TouchableOpacity
                onPress={() => alert('this is 2nd button')}
                style={{
                  backgroundColor: '#f0724e',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginTop: 5
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 15,
                    paddingLeft: 15
                  }}
                >
                  {this.props.btnTitle}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}
