import React from 'react'
import { TextInput, View,StyleSheet, ImageBackground,Text } from 'react-native'

function Input({name,placeholder}) {
  return (
    <View style={styles.superView}>
    <Text style={styles.text} >{name}</Text>
    <View style={styles.main}>
        <ImageBackground style={{flex:1}} source={require("../assets/InputBackground.jpg")}>
        <TextInput placeholder={placeholder} style={{padding:10}}/>
        </ImageBackground>

    </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    main:{
        height:45,
        width:"75%",
        borderRadius:10,
        overflow:"hidden",
    },
    superView:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10
    },
    text:{
        marginTop:10,
        fontSize:16,
        fontWeight:"bold",
        width:"25%"
    }
})