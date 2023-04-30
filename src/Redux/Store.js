import {combineReducers, configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { Reducer } from './Reducer'

const rootreducer=combineReducers({user:Reducer})

const store=configureStore({reducer:rootreducer,middleware:[logger,thunk]});
export default store;