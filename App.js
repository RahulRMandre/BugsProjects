import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './route/StackNavigator.js';
import Home from './screen/Home.js'
import Test from './screen/Test.js';

export default function App() {
  return (

    
     <StackNavigator/>
 

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
