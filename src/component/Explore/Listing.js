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

export default class Listing extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: 10
        }}
      >
        <View style={styles.mainWrapper}>
          <View style={styles.imgWrapper}>
            <Image source={this.props.imageUri} style={styles.imgCls} />
          </View>
          <Text
            style={[
              styles.textWrapper,
              {
                color: '#000',
                fontWeight: 'bold'
              }
            ]}
          >
            {this.props.title}
          </Text>
          <Text
            style={[
              styles.textWrapper,
              {
                color: '#666666',
                marginVertical: 5
              }
            ]}
          >
            ₹{this.props.price}
          </Text>
          <View style={styles.btnsWrapper}>
            <TouchableOpacity
              style={[styles.bottomBtn, { backgroundColor: '#009393' }]}
              onPress={() => alert('click Buy Once')}
            >
              <Text style={styles.btnText}>Buy Once</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bottomBtn, { backgroundColor: '#f0724e' }]}
              onPress={() => alert('click Subscribe')}
            >
              <Text style={styles.btnText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    //padding: 20
  },
  mainWrapper: {
    backgroundColor: '#fff',
    //padding: 20,
    //margin: 5,
    marginBottom: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden'
  },
  imgWrapper: {
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    height: screenHeight - 675,
    backgroundColor: '#555'
  },
  imgCls: {
    flex: 1,
    resizeMode: 'cover',
    width: screenWidth / 2,
    height: screenHeight / 4
  },
  btnsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden'
  },
  bottomBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  textWrapper: {
    paddingLeft: 10,
    fontSize: 18
  }
});
