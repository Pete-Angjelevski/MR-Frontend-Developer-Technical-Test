import { AppActionTypes} from '../types/actionTypes'

export const ADD_TO_CART = "ADD_TO_CART"


export function addToCart (
  id: number,
  name: string,
  price: number,
  img: string,
  size: string,
  quantity: number = 1,
) : AppActionTypes  {

  return {
    type: ADD_TO_CART,
    id,
    name,
    price,
    img,
    size,
    quantity,

  }
}