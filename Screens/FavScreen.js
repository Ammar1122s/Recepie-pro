import React, { useContext, useEffect } from 'react'
import { View ,Text, ImageBackground,StyleSheet,ScrollView} from 'react-native'
import { MealContext } from '../store/Meal-Ruducer'
import MealShow from '../components/MealShow'

function FavScreen({navigation}) {

  const MealContxt = useContext(MealContext)
  const favMeals = MealContxt.fav

  useEffect(()=>{
    navigation.setOptions({
      headerTransparent:true,
            headerTitleAlign:"center",
            headerTitle:"Your Favourties",
            headerTintColor:"white",
            headerTitleStyle:{
                fontWeight:"bold",
                fontSize:25
            }
    })
  },[])
  return (
    <ImageBackground style={{flex:1}} source={require("../assets/background.jpg")}>
   <ScrollView>
    <View style = {styles.main}>
        {
            favMeals.map((meals) => {
                return(
                   <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}
                    key={meals.title}>
                    <MealShow meal = {meals}/>
                    </View>
                 
                )
            })
        }


    </View>
    </ScrollView>
    </ImageBackground>
   
  )
}

export default FavScreen;

const styles = StyleSheet.create({
    main:{
        marginTop:100,
        justifyContent:"center",
        alignItems:"center",
    }})