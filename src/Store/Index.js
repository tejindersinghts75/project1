import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import counterReducer from './Counter'


const store = configureStore({
  reducer:{counter:counterReducer}});
    export default store;

