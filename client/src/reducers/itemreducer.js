import { GET_ITEMS, ADD_ITEM , DELETE_ITEM } from '../acions/types';
import uuid from 'uuid';



const initialState = {
    items :[
        {
            id:uuid(),
            title:'margrita',
            ingredients :['pomodro','mozzarella'],
            img:"https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&h=350"
        },
        {
            id:uuid(),
            title:'ortolana',
            ingredients :['pomodro','mozzarella','zuccina','peprone','melanzana'],
            img:'https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
            id:uuid(),
            title:'funghi',
            ingredients :['pomodro','mozzarella','funghi'],
            img:'https://images.pexels.com/photos/16495/food-pizza-fast-food.jpg?auto=compress&cs=tinysrgb&h=350'
        }  

    ]
}
export default function (state=initialState, action){
    switch (action.type){
        case GET_ITEMS :
        return{
            ...state
        }
        default :
        return state;
    }

}