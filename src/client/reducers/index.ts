import { combineReducers } from 'redux'
import cart from './cartReducer'


export const rootReducer = combineReducers({
  cart
})

export type AppState = ReturnType<typeof rootReducer>