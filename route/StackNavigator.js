import {createAppContainer} from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home'
import Project from '../screen/Project'
import Bug from '../screen/Bug'
import React from 'react';

const Stack = createStackNavigator();
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
    <Screen name="Project" component={Project} />
    <Screen name="Bug" component={Bug} />
  </Navigator>
);

export const StackNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);




export default StackNavigator;