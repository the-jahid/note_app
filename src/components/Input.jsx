import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({placeholder , secureTextEntry, onChangeText, value, autoCapitalize, multiline}) => {
  return (
    <View>
      <TextInput 
       style={styles.input}
       placeholder={placeholder}
       secureTextEntry={secureTextEntry}
       onChangeText={onChangeText}
       multiline={multiline}
       autoCapitalize={autoCapitalize}
       value={value}
       />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        marginBottom:25,
        height:48,
        borderColor:'black',
        borderBottomWidth:1
    }
})