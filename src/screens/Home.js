import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase.init';


const Home = ({ route, user}) => {

  const [notes, setNotes] = React.useState([])

  useEffect( () => {
    const q  = query(collection(db, "notes"), where("uid", "==", user.uid));
    const notesListnerSubcription = onSnapshot(q, (querySnap) => {
      const list = [];
      querySnap.forEach((doc) => {
        list.push({...doc.data(), id:doc.id})
      })
      setNotes(list)
    }) 
    return notesListnerSubcription
  }, [])

  const navigation= useNavigation()
  
  const onpressCreate = () => {
    navigation.navigate('Create')
  }

  const renderItem = ({item}) => {
   
    return (
      <Pressable 
      onPress={() => {
        navigation.navigate('Update', {item})
      }} 
      style={{
        backgroundColor:item.color,
        padding:10,
        borderRadius:10,
        marginVertical:5
      }}
      >
       <Pressable 
       onPress={() => {
        deleteDoc(doc(db, "notes", item.id) )
        }}

       style={{position:'absolute', alignSelf:'flex-end', padding:15, zIndex:4}}
       >
         <AntDesign name="delete" size={24} color="black" />
       </Pressable>
        <Text style={{color:'white', fontSize:20}}>{item.title}</Text>
        <Text style={{color:'white'}}>{item.desCription}</Text>
      </Pressable>
    )
  }


  return (
    <View style={{padding:20}}>
      <View style={{flexDirection:'row', justifyContent:'space-between' }}>
        <Text >My notes</Text>
        <Pressable onPress={onpressCreate}>
            <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
      </View>
    <FlatList 
     data={notes} 
     renderItem={renderItem}
     keyExtractor={(item) => item.title} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})