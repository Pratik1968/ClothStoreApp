import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import userReducer from '../feature/user/userSlice'
import productsReducer from '../feature/products/productsSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import cartsReducer,{ cartsSlice } from '../feature/carts/cartsSlice';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};
const rootReducer = combineReducers({
user:userReducer,
products:productsReducer,
carts:cartsReducer
})
const persistedRootReducer =  persistReducer(persistConfig,rootReducer)

export const store = configureStore({
 reducer:persistedRootReducer,
  
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
