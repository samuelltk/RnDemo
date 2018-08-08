import React, { Component } from 'react'
import { View,Text,Button } from 'react-native'
import { createNavigationContainer, createNavigator, StackNavigator,
  StackRouter,createStackNavigator } from 'react-navigation'
import BubbleTransition from './BubbleTransition'
import { Template } from './Screens';

const r = createNavigator(StackRouter({
  A: {
    screen: Template
  }, B: {
    screen: Template
  }
}, {
  initialRouteName: 'A',
  headerMode: 'float',
}));

// const r =createNavigator(
//   {
//     A: {
//       screen: A
//     }, B: {
//       screen: B
//     }
//   },{
//     initialRouteName: 'A',
//     headerMode: 'screen',
//   }
// )

const Navigator = createNavigationContainer(r(BubbleTransition))

export default class AppWithNavigationState extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Navigator/>
      </View>
    )
  }
}
