import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {addDoc, collection, getDocs, doc, onSnapshot, query, where} from "firebase/firestore"
import { auth, db } from '../../firebase.init';
import { useNavigation } from '@react-navigation/native';
import RadioInput from '../components/RadioInput';

const genderOptions = ['Male', "Female"]

const Sign_up = () => {

  const navigation = useNavigation();
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = React.useState(false);

  const handleSignup =  async () => {
    try{
      setLoading(true)
      // 1 . CREATE USER
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // 2. ADD USER PROFILE 
      await addDoc(collection(db, "users"), {
        name:name,
        email:email,
        age:age,
        gender:gender,
        uid:result.user.uid
      })
     
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  if(loading){
    return <Text>Hello world</Text>
  }

  return (
    <SafeAreaView style={{flex:1}}>
        
        <View style={{paddingHorizontal:16, paddingVertical:25}}>
            <Input placeholder={'Email Adress'} onChangeText={(text) => setEmail(text)} />
            <Input placeholder={'Password'} onChangeText={(text) => setPassword(text)} secureTextEntry />
            <Input placeholder={'Full Name'} onChangeText={(text) => setName(text)} />
            <Input placeholder={'Age'} onChangeText={(text) => setAge(text)} />
            <View style={{marginVertical:20}}>
              <Text>Select Gender</Text>
            </View>
            {
              genderOptions.map((option, index ) => {
               
                 return (
                  <RadioInput
                    setValue={setGender}
                    value={gender}
                    key={index}
                    label={option}
                  
                  />
                
                 )})
            }
        </View>

        <View style={{
            flex:1,
            justifyContent:'flex-end',
            paddingBottom:40,
            alignItems:'center',
          }}>
            <Button onPress={handleSignup} title={"SIGNUP"} customStyles={{alignSelf:'center', marginBottom:60}}></Button>

            <Pressable>
                <Text>Already Have An Account? <Text style={{color:'green', fontWeight:'bold'}}>Sign In</Text></Text>
            </Pressable>
        </View>
        
    </SafeAreaView>
  )
}

export default Sign_up

