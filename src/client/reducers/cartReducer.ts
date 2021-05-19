import { ADD_TO_CART } from '../actions/cartActions'
import { CartActionTypes } from '../types/actionTypes'
import { CartType } from '../types/appSpecificTypes' 
 

const cartReducerDefaultState: CartType[] = []

const cartReducer = (state = cartReducerDefaultState, action: CartActionTypes ): any => {
  ADD_TO_CART


  switch (action.type) {

    case ADD_TO_CART:
       return (
        state.find(item => item.size === action.size)
          ? state.map(item => (
            item.size === action.size
              ? { id: item.id, name: item.name, quantity: item.quantity + 1, price: item.price + action.price, img: action.img, size: action.size}
              : item
          ))
          : [...state,
            {
              id: action.id,
              name: action.name,
              quantity: action.quantity,
              price: action.price,
              img: action.img,
              size: action.size
            }]
       )

    default:
      return state
    
  }

}

export default cartReducer