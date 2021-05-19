import { ADD_TO_CART } from '../actions/cartActions'


export interface addToCartType {
  type: typeof ADD_TO_CART
  id: number
  name: string
  price: number
  img: string
  size: string
  quantity: number
}


export type CartActionTypes = addToCartType

export type AppActionTypes = CartActionTypes