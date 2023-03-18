import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import RadioInput from '../components/RadioInput'
import Button from '../components/Button'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase.init'

const Update = ({navigation, route, user}) => {
  const noteItems = route.params.item;
  const noteColorOptions = ['red', 'blue', 'green']
  const [loading, setLoading] = React.useState(false)
  const [title, setTitle] = useState(noteItems.title)
  const [desCription, setDescription] = useState(noteItems.desCription)
  const [noteColor, setNoteCOlor] = useState('blue')

 
  const onpressUpdate = async () => {

    const noteRef = doc(db, 'notes', noteItems.id)

    setLoading(true)
    try {
       await updateDoc(doc(db, "notes", noteItems.id) , {
        title:title,
        desCription:desCription,
        color:noteColor
       })
        setLoading(false)
    } catch (error) {

        setLoading(false)
    }
  }

  return (
    <View style={{marginHorizontal:20, flex:1}}>
      <Input
        placeholder={'Title'}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Input
        placeholder={'Description'}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        value={desCription}
      />

      <View>
         <Text>Select Your Notes Color</Text>  
      </View> 
      {
        noteColorOptions.map((option, index) => {
          return(
         <RadioInput
          key={index}
          label={option}
          value={noteColor}
          setValue={setNoteCOlor}
         />
        )})}

        
     { loading ? <Text>I am loading</Text> : <Button 
      title={'Submit'}
      customStyles={{marginTop:25, alignSelf:'center', marginTop:60, width:'100%'}}
      onPress={onpressUpdate}
      />  }
    </View>
  )
}

export default Update

const styles = StyleSheet.create({})