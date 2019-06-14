import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import * as images from '../assets/images';
const { width, height } = Dimensions.get('window');
import Slideshow from 'react-native-image-slider-show';
import Category from '../component/Explore/Category';
import Listing from '../component/Explore/Listing';
import GridList from '../component/Explore/GridList';
import ListHeader from '../component/Explore/ListHeader';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.mainWrapper}
          showsHorizontalScrollIndicator={true}
        >
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around'
            }}
          >
            <Category
              imageUri={images.img.slider1}
              title={'Seasonal Fruits'}
              subTitle={'are Here'}
              btnTitle={'Subscribe'}
              myPropsVal='1'
            />
            <Category
              imageUri={images.img.slider2}
              title={'Subscription'}
              subTitle={'of the day'}
              btnTitle={'Subscribe'}
              myPropsVal='2'
            />
          </ScrollView>
          <View
            style={{
              marginTop: 15
            }}
          >
            <ListHeader name='Hot products' />
            <ScrollView
              scrollEventThrottle={16}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-around'
              }}
            >
              <Listing
                imageUri={images.img.photo_1}
                title='Milk Bottle'
                price='60'
              />
              <Listing
                imageUri={images.img.photo_2}
                title='Fresh Vegitable'
                price='135'
              />
              <Listing
                imageUri={images.img.photo_3}
                title='Brown Eggs'
                price='45'
              />
              <Listing
                imageUri={images.img.photo_4}
                title='Breds'
                price='135'
              />
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: 15
            }}
          >
            <ListHeader name='Browse by category' />
            <View style={styles.gridMainWrapper}>
              <View style={styles.gridWrapper}>
                <GridList imageUri={images.img.product_1} title='Beverages' />
                <GridList imageUri={images.img.product_2} title='Dairy' />
              </View>
              <View style={styles.gridWrapper}>
                <GridList imageUri={images.img.product_3} title='Fruits' />
                <GridList imageUri={images.img.product_4} title='Vegitables' />
              </View>
              <View style={styles.gridWrapper}>
                <GridList imageUri={images.img.product_1} title='Beverages' />
                <GridList imageUri={images.img.product_2} title='Dairy' />
              </View>
              <View style={styles.gridWrapper}>
                <GridList imageUri={images.img.product_3} title='Fruits' />
                <GridList imageUri={images.img.product_4} title='Vegitables' />
              </View>
            </View>
          </View>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around'
            }}
          >
            <Category
              imageUri={images.img.slider2}
              title={'Subscription'}
              subTitle={'of the day'}
              btnTitle={'Subscribe'}
              myPropsVal='2'
            />
            <Category
              imageUri={images.img.slider1}
              title={'Seasonal Fruits'}
              subTitle={'are Here'}
              btnTitle={'Subscribe'}
              myPropsVal='1'
            />
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
    //padding: 20
  },
  mainWrapper: {},
  secondWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  sliderImg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  gridMainWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridWrapper: {
    flex: 1,
    flexDirection: 'row'
  }
});
