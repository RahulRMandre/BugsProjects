import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { FlatList,StyleSheet, Text, View,Dimensions,ImageBackground ,TouchableWithoutFeedback} from 'react-native';
import axios from 'axios'
import { SafeAreaView } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Project() {
  const initState={
    id:0,
    title:"NO PROJECTS",
    platform:'icon'
  }

 const [projects,setProjects]=useState([]);
 
 const image={
  platform:{
     'android':require('../assets/android.png'),
     'windows':require('../assets/windows.png'),
     'linux':require('../assets/linux.png'),
     'apple':require('../assets/apple.png'),
  }
 };


 useEffect(()=>{
  axios.get('https://my-json-server.typicode.com/RahulRMandre/BugsProjects/projects/')
  .then(function (response) {
    const res=response.data;
    setProjects(res);
    
   
  })
  .catch(function (error) {
    console.log(error);
  });

 },[])
  
  

  const dataList=projects.length>0 ?(
    <FlatList
    data={projects}
    renderItem={({item}) => {
      const loc=item.platform;
      return(  
     <View style={styles.item} >
       <View style={{flex:9,backgroundColor:'yellow', borderRadius:10,}}>
       <Text style={styles.itemTitle}>{item.title}</Text>
       </View>
      <View style={{flex:2,backgroundColor:'green', borderRadius:10,paddingLeft:10}}>
       <ImageBackground  style={styles.tinyLogo} source={image.platform[loc]}/>
      </View>
      
      </View>
    )}}/>
    ) :(
  <Text >Empty projects :(</Text>)
  

  return (
    <SafeAreaView style={styles.container} >
     <StatusBar barStyle='default' backgroundColor='blue' hidden={false}/>
     <Text style={styles.title}>Projects</Text>
      {dataList}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  item:{
    flex:1,
    flexDirection:'row',
    marginBottom:1,
    width:Dimensions.get('window').width-20,
    height:Dimensions.get('window').height/10,
    margin:10,
   
    
  
    
    
  },
  itemTitle:{
   color:'black',
    padding:10,
    flex:9,
    fontSize:20,
    alignSelf:'center',
    backgroundColor:'yellow'
   
  },

  itemPlatform:{
    alignSelf:'flex-end',
  },
  title:{
    marginTop:Dimensions.get('window').height/20,
    color:'black',
    fontSize:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    flex:2,
    alignSelf:'flex-end',
    margin:10,
    width: 50,
    height: 50,
    overflow:'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    

  },

  

  })
