import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducers from './reducers/userReducer.js'

const store = createStore(userReducers, applyMiddleware(thunk))

export default store