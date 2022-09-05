import { AntDesign,SimpleLineIcons,EvilIcons,Ionicons } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { View,StyleSheet,Text,Image ,Pressable} from 'react-native'
import { MealContext } from '../store/Meal-Ruducer'


function MealShow(props) {

  const favContxt = useContext(MealContext);

  const fav = favContxt.fav;

  const isFav = !! fav.find((favName)=> favName.title === props.meal.title)

  function favHandler(meal,title){
    isFav ? favContxt.deleteFav(title) : favContxt.addFav(meal)
  }


  return (
    
    <View style={styles.main}>
    <Pressable style={({pressed}) => pressed ? styles.onPress2 : null}>
    <View style={styles.imgView}>
      <Image style={styles.img} source={{uri:props.meal.imgUrl}}/>
      </View>
      </Pressable>
      <View style={styles.detailsView}>
        <View style={{flexDirection:"row",justifyContent:"space-between",paddingRight:5,width:200,}}>
        <Text style={{fontSize:16,fontWeight:"bold"}}>{props.meal.title}</Text>
        <Pressable style={({pressed}) => pressed ? styles.onPress2 : null}
         onPress={favHandler.bind(this,props.meal,props.meal.title)}>
          {
            isFav ? <Ionicons name="ios-heart-circle-sharp" size={24} color="black" />:
            <Ionicons name="heart-circle-outline" size={24} color="black" />
          }
        
        </Pressable>
        </View>
        <View style={{flexDirection:"row",marginTop:10}}>
        <AntDesign name="user" size={24} color="black" style={{marginRight:10}}/>
        <Text>{props.meal.uploadBy}</Text>
        </View>
        <View style={{flexDirection:"row",marginTop:80,justifyContent:"space-between",width:"80%",
        paddingRight:18
        }}>
            <Pressable style={({pressed}) => pressed ? styles.onPress2 : null}>
           <SimpleLineIcons name="like" size={20} color="black" />
           </Pressable>
           <Text>Like</Text>
           <EvilIcons name="comment" size={30} color="black" />
           <Text>Comment</Text>
           </View>
           
      </View>
    </View>


  )
}

export default MealShow

const styles = StyleSheet.create({
    main:{
        backgroundColor:"white",
        height:200,
        width:"95%",
        margin:25,
        borderRadius:10,
        padding:15,
        flexDirection:"row"
    },
    img:{
        marginTop:-35,
        height:200,
        width:110,
        borderRadius:10   
    },
    imgView:{

    },
    detailsView:{
        marginLeft:10
    },
    onPress2:{
        opacity:0.5

    }
})