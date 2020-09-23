import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Project() {
  return (
    <View>
     <StatusBar barStyle='default' backgroundColor='blue'/>
      <Text>Project</Text>
    </View>
  );
}