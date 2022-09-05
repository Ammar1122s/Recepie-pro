
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screens/HomeScreen"
import FavScreen from './Screens/FavScreen'
import Profile from "./Screens/Profile"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import MealContextProvider from './store/Meal-Ruducer';
import SingleCatScreen from './Screens/SingleCatScreen';
import AddScreen from './Screens/AddScreen';




export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomScreens(){
    return(
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor:"green",
    }} >
      <Tab.Screen name='Start' component={HomeScreen} options={{headerShown:false,
      tabBarIcon:({color,size})=>{
        return(<Ionicons name="home-outline" size={size} color={color} />)
      },
     
      }}/>
      <Tab.Screen  name = 'Favorites' component={FavScreen}  options={{
        tabBarIcon:({color,size})=>{
          return(<Ionicons name="heart-outline" size={size} color={color} />)
        },
      }}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon:({color,size})=>{
          return(<AntDesign name="user" size={size} color={color} />)
        },
      }}/>
    </Tab.Navigator>
     

    )
  }



  return (
    <MealContextProvider>
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='Home' component={BottomScreens} options={{headerShown:false}}/>
      <Stack.Screen name= 'Fav' component={FavScreen} />
      <Stack.Screen name = 'Profile' component={Profile}/>
      <Stack.Screen name='SingleCatScreen' component={SingleCatScreen}  />
      <Stack.Screen name='AddScreen' component={AddScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
   </MealContextProvider>
  );
}