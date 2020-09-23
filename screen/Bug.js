import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Bug() {
  return (
    <View style={styles.container} >
     <StatusBar barStyle='default' backgroundColor='red' hidden={false}/>
      <Text>Bug</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  })