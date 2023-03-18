import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RadioInput = ({key, label, value, setValue}) => {

  const selected = value === label

  return (
  <Pressable onPress={() => setValue(label)} key={key} style={styles.radioContainer}>
      <View style= {[styles.oouterCirlce, selected && styles.selectedOuterCircle ]}>
          <View style={[styles.innerCircle, selected && styles.selectedInnerCircle]}></View>
      </View>
      <Text style={styles.radioText} >{label}</Text>
  </Pressable>
  )
}

export default RadioInput

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