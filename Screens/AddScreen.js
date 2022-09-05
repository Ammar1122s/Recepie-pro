import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { ImageBackground, View,StyleSheet, Pressable,Text } from 'react-native'
import ImagePicker2 from '../components/ImagePicker'

import Input from '../components/Input'


function AddScreen({navigation}) {

    useEffect(()=>{
        navigation.setOptions({
          headerTransparent:true,
                headerTitleAlign:"center",
                headerTitle:"Add Your Recepies",
                headerTintColor:"white",
                headerTitleStyle:{
                    fontWeight:"bold",
                    fontSize:25
                }
        })
      },[])

    
  return (
    <ImageBackground style={{flex:1}} source={require("../assets/background.jpg")}>
        <View style={styles.main}>
            <View style={styles.subMain}>
                <Input name='Title' placeholder='Title'/>
                <Input name='Category' placeholder='Category'/>
                <ImagePicker2/>              
                
            </View>
           
        </View>
    </ImageBackground>
  )
}

export default AddScreen

const styles = StyleSheet.create({
    main:{
        justifyContent:"center",
        alignItems:"center"

    },
    subMain:{
        marginTop:150,
        backgroundColor:"white",
        width:"95%",
        height:400,
        borderRadius:10,
        padding:10
    },
   
})