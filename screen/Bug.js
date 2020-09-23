import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Bug() {
  return (
    <View>
     <StatusBar barStyle='default' backgroundColor='blue'/>
      <Text>Bug</Text>
      
    </View>
  );
}