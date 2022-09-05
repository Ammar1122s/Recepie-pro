
import React from 'react'
import { View,TextInput,StyleSheet } from 'react-native'
import {Ionicons } from '@expo/vector-icons';

function SearchBar() {
  return (
    <View style={styles.main}>
        <Ionicons name="search" size={24} color="#add8e6" />
        <TextInput placeholder='Search receipe food' style={{marginLeft:10}}/>
    
    </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    main:{
        width:300,
        height:45,
        backgroundColor:"white",
        margin:20,
        borderRadius:10,
        flexDirection:"row",
        padding:10
    }


}) 