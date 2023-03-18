import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Sign_in = () => {
    const navigation = useNavigation()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    
    const handleSignin = () => {
        signInWithEmailAndPassword(auth, email, password)
       
    }

  return (
    <SafeAreaView style={{flex:1}}>
        
        <Image style={{alignSelf:'center', width:500, height:400}}  source={require("../../assets/empty_state.jpg")} />
        <Text style={{fontSize:18, fontWeight:'bold', textAlign:'center'}}> 
            Never Forget Your notes
        </Text>
        <View style={{paddingHorizontal:16, paddingVertical:25}}>
             <Input onChangeText={(text) => setEmail(text) } placeholder={'Email Adress'} />
            <Input onChangeText={(text) => setPassword(text) } placeholder={'Password'} secureTextEntry />
        </View>

        <View style={{
            flex:1,
            justifyContent:'flex-end',
            paddingBottom:40,
            alignItems:'center',
          }}>
            <Button onPress={handleSignin} title={"Login"} customStyles={{alignSelf:'center', marginBottom:60}}></Button>

            <Pressable onPress={() => navigation.navigate('Signup')} >
                <Text>Don,t Have An Account? <Text style={{color:'green', fontWeight:'bold'}}>Sign Up</Text></Text>
            </Pressable>
        </View>
        
    </SafeAreaView>
  )
}

export default Sign_in

const styles = StyleSheet.create({
    input:{
        marginBottom:25,
        height:48,
        borderColor:'black',
        borderBottomWidth:1
    }
})