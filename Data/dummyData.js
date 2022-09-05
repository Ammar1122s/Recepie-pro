import Category from "./CategoryClass"
import Meal from "./DataClass"

export const  MEALS = [
new Meal("PanCakes", "Desserts", "Unknown",
 "https://images.pexels.com/photos/6529789/pexels-photo-6529789.jpeg?auto=compress&cs=tinysrgb&w=600" ),
 new Meal("Cakes", "Bread", "Unknown",
 "https://images.pexels.com/photos/7966522/pexels-photo-7966522.jpeg?auto=compress&cs=tinysrgb&w=600" ),
 new Meal("BreadFood", "Bread", "Unknown",
 "https://images.pexels.com/photos/7966010/pexels-photo-7966010.jpeg?auto=compress&cs=tinysrgb&w=600" ),

]

export const CATEGORY = [
    new Category('Desserts','https://cdn-icons-png.flaticon.com/128/1691/1691759.png'),
    new Category('Bread','https://cdn-icons-png.flaticon.com/128/58/58031.png'),
    new Category('Noodle','https://cdn-icons-png.flaticon.com/128/1257/1257622.png?ga=GA1.2.1970625418.1662233251'),
    new Category('Seafood','https://cdn-icons-png.flaticon.com/128/1257/1257634.png?ga=GA1.2.1970625418.1662233251'),
    new Category('FastFood','https://cdn-icons-png.flaticon.com/128/1255/1255340.png?ga=GA1.2.1970625418.1662233251')
]