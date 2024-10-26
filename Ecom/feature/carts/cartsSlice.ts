import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import state from "../../app/type/state"
import { User } from "../../app/type/user"
import { Product, ProductsState } from "../../app/type/products"
const initialState:ProductsState = {
isloading:false,
error:null,
value:[]
}

export const cartsSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{
    pushProducts:(state,action:PayloadAction<Product>)=>{
    state.value.push(action.payload)
    },
    setError: (state, action:PayloadAction<Error>)=>{
state.error = action.payload
    },
    setLoading:(state,action:PayloadAction<boolean>)=>{
        state.isloading = action.payload
    }
    }
})
export  const {pushProducts,setError,setLoading} = cartsSlice.actions
const reducer = cartsSlice.reducer
export default reducer