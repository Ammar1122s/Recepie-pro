import React, { useContext, useEffect } from 'react'
import { View ,Text,ImageBackground, ScrollView,StyleSheet} from 'react-native'
import MealShow from '../components/MealShow'
import { MealContext } from '../store/Meal-Ruducer'

function SingleCatScreen(props) {

    const MealContxt = useContext(MealContext)

    useEffect(()=>{
        props.navigation.setOptions({
            headerTransparent:true,
            headerTitleAlign:"center",
            headerTitle:props.route.params.name,
            headerTintColor:"white",
            headerTitleStyle:{
                fontWeight:"bold",
                fontSize:25
            }

        })
    },[])
   
    const mealList = MealContxt.meals.filter((meal)=>{ return(
         meal.catageory === props.route.params.name
    )})



  return (
    
    <ImageBackground style={{flex:1}} source={require("../assets/background.jpg")}>
        <ScrollView>
    <View style = {styles.main}>
        {
            mealList.map((meals) => {
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

export default SingleCatScreen

const styles = StyleSheet.create({
    main:{
        marginTop:100,
        justifyContent:"center",
        alignItems:"center",
    }})