import React, { Component } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import store from './store';

class App extends React.Component {



  render() {

    const Tabs = createBottomTabNavigator({
      
    })

    const MainNavigation = createBottomTabNavigator({
      home: { Tabs },
      entryDetail: EntryDetail
    }, {
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      }
    })

    return(

      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainNavigation />
        </View>
      </Provider>

    )
  }
}