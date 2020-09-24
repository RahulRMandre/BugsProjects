import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, Dimensions ,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Home({navigation}) {


  return (
    <SafeAreaView style={styles.container}>
       <StatusBar  hidden={true}/>
      <TouchableOpacity style={styles.project} onPress={()=>{navigation.navigate('Project')}}>
      <Image source={require('../assets/project.png')}/>
      <Text  style={styles.title}>Projects</Text>
      </TouchableOpacity>

  
      <TouchableOpacity style={styles.bug} onPress={()=>{navigation.navigate('Bug')}}>
      <Image source={require('../assets/bug.png')}/>
      <Text style={styles.title}>Bugs</Text>
      </TouchableOpacity>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  project: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height/2,
    
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bug: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height/2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    color:'black',
    fontSize:30,
  }
});