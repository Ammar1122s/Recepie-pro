import { createContext, useReducer } from "react";

import { MEALS } from "../Data/dummyData";

export const MealContext = createContext({
    category:[],
    meals:[],
    addMeal: ()=>{},
    updateMeal: ()=>{},
    deleteMeal: ()=>{},
    fav:[],
    addFav: (meal)=>{},
    deleteFav: (title)=>{}
})

function mealReducer(state,action){
    switch(action.type){
       case 'ADD':{

       }
       case 'UPDATE':{

       }
       case 'DELETE':{

       }
       default:
        return state;
    }

}

function favReducer(state,action){
    switch(action.type){
        case 'ADD':{
            console.log("ok")
            return([...state,action.payload]);
        }
        case 'DELETE':{
            const final = state.filter((mealName)=> mealName.title !== action.payload)
            return final;
        }
    }

}




export default function MealContextProvider({children}){

    const [favState, dispatchFav] = useReducer(favReducer,[])

    const [mealState, dispatch ] = useReducer(mealReducer,MEALS)

    function addMeal(mealData){
        dispatch({type:"ADD" , payload:mealData})
    }

    function deleteMeal (id){
        dispatch({type:"DELETE" , payload : id})
    }

    function updateMeal (id,MealData){
        dispatch({type:"UPDATE" , payload : {id:id, data : MealData}})
    }

    function addFav(name){
        dispatchFav({type:"ADD",payload:name})
    }

    function deleteFav(name){
        dispatchFav({type:"DELETE",payload:name})
    }

    const value ={
        meals: mealState,
        addMeal:addMeal,
        deleteMeal:deleteMeal,
        updateMeal:updateMeal,
        fav:favState,
        addFav:addFav,
        deleteFav:deleteFav
    }





    return(
        <MealContext.Provider value={value}>{children}</MealContext.Provider>
    
    )
}







