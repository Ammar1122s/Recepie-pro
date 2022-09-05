import { SimpleLineIcons,EvilIcons ,AntDesign} from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Image, View ,StyleSheet, ScrollView,Text, ImageBackground,Pressable} from 'react-native'
import { MealContext } from '../store/Meal-Ruducer'




function PopularFood() {

  const mealContxt =  useContext(MealContext)
  
  return (
    <ScrollView horizontal={true} >
    <View style={styles.main}>
      
    {
      mealContxt.meals.map((meal) =>{
        return(
          <View style={styles.subMain} key={meal.title}>
            <Pressable style={({pressed}) => pressed ? styles.onPress : null}>
              <View>
           <ImageBackground style={{height:300,width:300}} source= {{uri:meal.imgUrl}}>
            <View style={styles.mealTitle}>
              <Text  style={{color:"white" , fontSize:20, fontWeight:"bold"}}>{meal.title}</Text>
              <View style={styles.profilTag}>
              <AntDesign name="user" size={24} color="white"/>
              <Text style={{color:"white" , fontSize:16, fontWeight:"bold", marginLeft:10}}>{meal.uploadBy}</Text>
              </View>
            </View>
           </ImageBackground>
           </View>
           </Pressable>
           <View style={styles.cri}>
            <Pressable style={({pressed}) => pressed ? styles.onPress2 : null}>
           <SimpleLineIcons name="like" size={20} color="black" />
           </Pressable>
           <Text>Like</Text>
           <EvilIcons name="comment" size={30} color="black" />
           <Text>Comment</Text>
           </View>
           
           </View>
        )
            
      })
    }
    </View>
    
    </ScrollView>
    
  )
}

export default PopularFood

const styles = StyleSheet.create({
  main:{
    width:"100%",
    flexDirection:"row",
  },
  subMain:{
    margin:10,
    overflow:"hidden",
    borderRadius:10,
    backgroundColor:"white",
    height:350
  }
,
cri:{
  padding:10,
  paddingLeft:25,
  paddingRight:30,
  flexDirection:"row",
  justifyContent:"space-between"
},
mealTitle:{
  marginTop:210,
  padding:10
},
profilTag:{
  margin:10,
  flexDirection:'row'
},
onPress:{
  opacity:0.8
},
onPress2:{
opacity:0.5

}
})