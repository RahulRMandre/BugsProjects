import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Button, StyleSheet, Text, View,Alert,FlatList,ImageBackground, Modal, TextInput, TouchableOpacity, Dimensions, Switch} from 'react-native';
import * as SQLite from 'expo-sqlite'
import { setEnabled } from 'react-native/Libraries/Performance/Systrace';
const db =  SQLite.openDatabase('db.bugsDb') // returns Database object


const newItem =({setvisible,bugname,enabled}) => {
  //console.log('new item');
  //console.log(bugname,enabled);
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO bugs (name, isClosed, createdAt, projectId) values (?, ?, ?, ?)', 
      [bugname,`${enabled}`,'2020-09-12T09:41:59.460Z',1],
      (txObj, resultSet) =>{
        console.log('success added elemnt', resultSet); 
        },
      (txObj, error) => console.log('Error', error))
  })
  setvisible(false)
}

const fetchData =({state,setstate}) => {
  //console.log('fetchData');
   db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM bugs',
      null,
      (txObj, { rows: { _array } }) => {
        if(state.length!==_array.length){
         // console.log(_array);
          setstate(_array);
        }
        
      } ,
      (txObj, error) => console.log('Error ', error)
      )
  })
}
  
const create= ()=>{
   db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS bugs (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, isClosed TEXT, createdAt TEXT, projectId INT)',
      null,
      (txObj, { rows: { _array } }) => console.log ('Instaiated',_array ) ,
      (txObj, error) => console.log('Error ', error)
    )
  })
}



export default function Bug() {

  const [state, setstate] = useState([]);
  const [visible, setvisible] = useState(false); 
  const [enabled, setenabled] = useState(false); 
  const [bugname, setbug] = useState(''); 
 
  {create()}
  fetchData({state,setstate});

  const dataList=state.length>0 ?(
    <FlatList
    style={styles.item}
    data={state}
    renderItem={({item}) => {
      return(  
        <View style={{flexDirection:'row', margin:10 }}>
          <View style={{flex:9,backgroundColor:'yellow'}}>
            <Text style={styles.itemTitle}>Title:{item.name}</Text>
            <Text style={styles.itemTitle}>Open:{item.isClosed}</Text> 
            <Text style={styles.itemBody}>timeStamp:{item.createdAt}</Text>
        </View>

        <View style={{flex:2,backgroundColor:'green', justifyContent:'center' ,alignItems:'center'}}>
        <ImageBackground  style={styles.tinyLogo} source={require('../assets/bug.png')}/>
        </View>


      </View>
    )}}/>
    ) :(
  <Text style={styles.itemTitle}>Empty Bugs :(</Text>)
 
  return (
    <View style={styles.container} >
     <StatusBar barStyle='default' backgroundColor='red' hidden={false}/>
      <Text>Bug</Text>
      {dataList}

      <Modal style={styles.container}
       visible={visible}>
        <Text style={styles.modalText}> Bug Title</Text>
        <TextInput style={styles.textInput} value={bugname} onChangeText={(text)=>{setbug(text)}}></TextInput>
        <Text style={styles.modalText}>Bug Closed</Text>
        <Switch thumbColor={enabled ? "#00ff00" : "#ff0000"} 
        onValueChange={()=>{setenabled(!enabled)}}
        value={enabled}></Switch>
        <View style={styles.modalButtonWrapper}>
        <TouchableOpacity style={styles.modalButton} onPress={()=>{newItem({setvisible, bugname, enabled})}}>
          <Text>Submit</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.modalButton} onPress={()=>{setvisible(false)}}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        </View>
     
      </Modal>
      
      
      <TouchableOpacity style={styles.addButton} onPress={()=>{setvisible(true)}}>
          <Text>Add New Bug</Text>
      </TouchableOpacity>
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

  itemTitle:{
    color:'black',
     margin:10,
     flex:9,
     fontSize:20,
     alignSelf:'flex-start',  
   }, 
    itemBody:{
    color:'black',
    flex:9,
    fontSize:9,
     alignSelf:'flex-end',  
   },
 

   itemPlatform:{
     alignSelf:'flex-end',
   },

   tinyLogo: {
    
    width: 50,
    height: 50,
    alignSelf:'center',
    
    

  },

  textInput:{ 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin:10,
    },

  modalButtonWrapper:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalButton:{
    margin:10,
    height:40,
    width:Dimensions.get('window').width/2-20,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton:{
    margin:10,
    height:40,
    width:Dimensions.get('window').width-20,
    backgroundColor:'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  } ,
  item:{
    width:Dimensions.get('window').width,
    
  }, 
  })