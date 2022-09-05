import { Ionicons } from '@expo/vector-icons'
import {PermissionStatus,launchImageLibraryAsync,useMediaLibraryPermissions} from 'expo-image-picker'
import React, { useEffect, useState } from 'react'
import { View,StyleSheet,Text,Pressable, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'

function ImagePicker2() {

  const [hasPremission, setHasPermission] = useState()
  const [image, setImage] = useState(null);

 useEffect(()=>{
  ( async() =>{
    console.log("Enter")
    const check = await MediaLibrary.requestPermissionsAsync();
    setHasPermission(check.status === 'granted')
  })() 
 },[])
    
    
 

  console.log(hasPremission)

    
    

     async function checkPermission(){
      
    if(status.status === PermissionStatus.UNDETERMINED){
      const per = await requestPermission();
      return per.granted; 
    }
    if(status.status === PermissionStatus.DENIED){
      Alert.alert("Warning", "App will not work properly!")
      return false;
    }
    return true;
   }



    const pickImage = async () => {
    

      // const premission = await checkPermission();
      // console.log(premission)

      if(hasPremission){

      let result = await launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result); 
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
    if(!hasPremission){
      Alert.alert("Warning", "App will not work properly!")
    }
    };

  return (
    <View style={styles.imgView}>
     <Text style={{margin:10}}>Choice the Image</Text>
      <Pressable style={({pressed}) => pressed ? [{margin:7}, styles.onPress] : {margin:7}}
      onPress={pickImage}>
        <Ionicons name="images" size={28} color="black" />
      </Pressable>
    </View>
  )
}

export default ImagePicker2

const styles = StyleSheet.create({
    imgView:{
        flexDirection:"row",
        marginTop:20
    },
    onPress:{
        opacity:0.5
    }
})


//const[camerPermissionState, requestPermission] = useCameraPermissions()
    // async function imgHandler(){
    //    const hasPermission = verifyPermission()
    //    if (hasPermission){
    //    const image = await launchCameraAsync({
    //     allowsEditing:true,
    //     aspect:[16,9],
    //     quality:0.5
    //    });
    //    console.log(image)
    //   }
    //   else{
    //     return;
    //   }

       
    // }


      // async function verifyPermission(){

    //   console.log(PermissionStatus.UNDETERMINED)
    //   console.log(camerPermissionState.status)



    //     if(camerPermissionState.status === PermissionStatus.UNDETERMINED){
    //         const premission = await requestPermission()
          
    //         return premission.granted
    //     }
    //     if(camerPermissionState.status === PermissionStatus.DENIED){
    //         Alert.alert("Warning", "App will not work properly!")
    //         return false
    //     }
    //     return true;
        
    // }