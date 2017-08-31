import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reduce from './reduces/index'

let store =  createStore(
    reduce,
    applyMiddleware(thunk)
)
export default store
