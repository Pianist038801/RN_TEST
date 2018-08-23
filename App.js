/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Course from './src/screens/course'
import SimpleList from './src/screens/simpleList'
import Meditation from './src/screens/meditation'

export default createStackNavigator({
    Course,
    SimpleList,
    Meditation,
  },
  {
    initialRouteName: 'Course'
  },
);