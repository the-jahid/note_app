import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title, onPress, customStyles}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customStyles]}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        borderRadius:30,
        width:165,
        height:45,
        backgroundColor:"#FFE600",
        justifyContent:'center',
        alignItems:'center'
    },
     title:{
        fontSize:16
    }
})