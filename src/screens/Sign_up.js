import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();


const genderOptions = ['Male', "Female"]

const Sign_up = () => {

  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [age, setAge] = useState()
  const [name, setName] = useState()

  const handleSignup = () => {
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
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
              genderOptions.map((option) => {
                const selected = option === gender
                
                 return (
                    <Pressable onPress={() => setGender(option)} key={option} style={styles.radioContainer}>
                      <View style= {[styles.oouterCirlce, selected && styles.selectedOuterCircle ]}>
                          <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
                      </View>
                      <Text style={styles.radioText} >{option}</Text>
                    </Pressable>
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

const styles = StyleSheet.create({
  radioContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10

  },
  oouterCirlce:{
    height:30,
    width:30,
    borderRadius:15,
    borderWidth:1,
    borderColor:"#cfcfcf",
    
    justifyContent:'center',
    alignItems:'center'
  },
  selectedOuterCircle:{
    borderColor:"orange"
  },
  selectedInnerCircle:{
    backgroundColor:"orange",
    borderColor:"orange"
  },
  radioText:{
    marginLeft:10
  },
  innerCircle:{
    height:15,
    width:15,
    borderRadius:7.5,
    borderWidth:1,
    borderColor:"#cfcfcf",
   
    justifyContent:'center',
    alignItems:'center'
  }
})