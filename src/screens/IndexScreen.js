// In App.js in a new project

import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Cart from './Cart';
import Subscribe from './Subscribe';
import Notification from './Notification';
import Menu from './Menu';
import CustomIcon from '../component/CustomIcon';
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <CustomIcon name='home-1' size={26} color={tintColor} />
        )
      })
    },
    Subscribe: {
      screen: Subscribe,
      navigationOptions: ({ navigation }) => ({
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <CustomIcon name='subscribe-1' size={26} color={tintColor} />
        )
      })
    },
    Cart: {
      screen: Cart,
      navigationOptions: ({ navigation }) => ({
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <CustomIcon name='cart-1' size={26} color={tintColor} />
        )
      })
    },
    Notification: {
      screen: Notification,
      navigationOptions: ({ navigation }) => ({
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <CustomIcon name='notification' size={26} color={tintColor} />
        )
      })
    },
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        title: '',
        tabBarIcon: ({ focused, tintColor }) => (
          <CustomIcon name='menu' size={26} color={tintColor} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#009393',
      inactiveTintColor: '#333333',
      style: {
        height: 75,
        paddingTop: 5
        //backgroundColor: 'lightgrey'
      }
    }
  }
);

const AppNavigator = createStackNavigator({
  tab: {
    screen: TabNavigator,
    navigationOptions: () => ({
      headerMode: 'screen',
      headerTintColor: '#555',
      style: {
        backgroundColor: 'lightgrey'
      },
      headerLeft: <CustomIcon name='location' size={25} color={'#000'} />,
      headerLeftContainerStyle: {
        opacity: 0.5,
        marginLeft: 10
      },
      title: 'REGISTRATION',
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
      headerStyle: {
        backgroundColor: 'white'
      },
      cardStyle: {
        backgroundColor: 'transparent'
      },
      headerRight: (
        <Icon.Button
          name='search'
          backgroundColor='rgba(52, 52, 52, 0)'
          color='#000'
          onPress={() => alert('This is search!')}
        />
      ),
      headerRightContainerStyle: {
        opacity: 0.5,
        marginRight: 10
      },
      headerBackTitle: null
    })
  }
});

export default createAppContainer(AppNavigator);
