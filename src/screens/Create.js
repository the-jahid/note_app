import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import RadioInput from '../components/RadioInput'
import Button from '../components/Button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase.init'

const Create = ({navigation, route, user}) => {

  const noteColorOptions = ['red', 'blue', 'green']
  const [loading, setLoading] = React.useState(false)
  const [title, setTitle] = useState()
  const [desCription, setDescription] = useState()
  const [noteColor, setNoteCOlor] = useState('blue')


  const onpressCreate = async () => {
    setLoading(true)
     try {
      const docRef = await addDoc(collection(db, 'notes') , {
        title:title,
        desCription:desCription,
        color:noteColor,
        uid:user.uid
    })
    setLoading(false)
     } catch (error) {
      console.log(error)
      setLoading(false)
     }
  }

  return (
    <View style={{marginHorizontal:20, flex:1}}>
      <Input
      placeholder={'Title'}
      onChangeText={(text) => setTitle(text) }
      />
      <Input
        placeholder={'Description'}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
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
      onPress={onpressCreate}
      />  }
    </View>
  )
}

export default Create

const styles = StyleSheet.create({})