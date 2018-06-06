import React, { Component } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { Constants } from 'expo';
import {  Provider } from 'react-redux';
import store from './store';

class App extends React.Component {



  render() {

    return(

      <Provider store={store}>

        <View style={{flex: 1}}>

          <MainNavigation />

        </View>

      </Provider>

    )

  }

}
