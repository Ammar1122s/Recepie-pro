import React, { useEffect } from 'react'
import { View ,Text, StyleSheet, ImageBackground,Pressable} from 'react-native'
import CatDisplay from '../components/CatDisplay'
import PopularFood from '../components/PopularFood'
import SearchBar from '../components/SearchBar'
import { Ionicons } from '@expo/vector-icons'
import AddScreen from './AddScreen'

 


function HomeScreen({navigation}) {

 function addPressHandler(){
  navigation.navigate('AddScreen')
 }

  return (
    <ImageBackground style={{flex:1}} source={require("../assets/background.jpg")}>
   <View style= {styles.main}>
    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
    <Text style={styles.title}>FOOD RECEPIES</Text>
    <Pressable style={({pressed}) => pressed ? styles.onPress : null} onPress={addPressHandler}>
    <Ionicons style={{marginTop:50,marginRight:10}} name="md-add-sharp" size={35} color="white" />
    </Pressable>

    </View>
    
    <View style={styles.upperHalf}>
    <SearchBar/>
    <View style={styles.testView}>
    <Text style={{marginLeft:20,color:"white", fontSize:14,fontWeight:"bold"}}>Popular Recipes</Text>
    <Text style={{color:'white',fontWeight:"bold"}}>See All</Text>
    </View>
    <PopularFood/>
    </View>
    <View style ={styles.lowerHalf}>
      <View style={styles.catView}>
      <Text style = {{fontWeight:"bold"}}>Catagories</Text>
      <Text style={{color:"green", fontSize:15,fontWeight:"bold"}}>See All</Text>
      </View>
      <CatDisplay/>
      
    </View>
    
   </View>
   </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    main:{
      flex:1    
      
    
    },
    upperHalf:{
      
    },
    lowerHalf:{

    },
    title:{
      marginTop:50,
      marginLeft:15,
      fontSize:28,
      fontWeight:"bold",
      color:"white"
    },
    testView:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginRight:38,
    },
    catView:{
      marginTop:20,
      flexDirection:"row" ,
      justifyContent:"space-between",
      paddingLeft:20,
      paddingRight:45

    },
    onPress:{
      opacity:0.5
    }
})