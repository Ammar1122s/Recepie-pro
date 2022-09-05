import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View ,StyleSheet, ImageBackground,Image ,Text,Pressable} from 'react-native'
import { CATEGORY } from '../Data/dummyData'
import SingleCatScreen from '../Screens/SingleCatScreen'

function CatDisplay() {

    const navigation = useNavigation();


    function preesHandler(name){

    navigation.navigate('SingleCatScreen',{name:name})
}
  return (
    <ScrollView horizontal={true}>
    <View style = {styles.main}>
      
            {
                CATEGORY.map((cata)=>{
                    return(
                        
                    <View key={cata.name}>
                    <Pressable style={({pressed}) =>
                    pressed ? [styles.pressStyle,styles.onPress] : styles.pressStyle}
                    onPress={preesHandler.bind(this,cata.name)}>
                    <View style={styles.subMain}  >
                    
                        <ImageBackground style={{flex:1}} source={require("../assets/background.jpg")}>
                            <Image style={{height:40,width:40,alignSelf:"center"}} source={{uri:cata.iconUrl}}/>
                        </ImageBackground>
                        
                    </View>
                    
                    <View style={{margin:20,marginTop:-15}}>
                        <Text>{cata.name}</Text>
                    </View>
                    </Pressable>
                    </View>
                 
                    
                    )
                })
            }







      
    </View>
    </ScrollView>
  )
}

export default CatDisplay

const styles = StyleSheet.create({
    main:{
        flexDirection:"row"

    },
    subMain:{
        height:55,
        width:55,
        borderRadius:40,
        overflow:"hidden",
        margin:20,
       
             
    
    }, 
    onPress:{
        opacity:0.5,
        
    },
    pressStyle:{
        height:100,
        width:100, 
        borderRadius:100
    }
})