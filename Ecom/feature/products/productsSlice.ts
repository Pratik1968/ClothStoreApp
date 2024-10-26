import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import state from "../../app/type/state"
import { User } from "../../app/type/user"
import { Product } from "../../app/type/products"
const initialState:state = {
isloading:false,
error:null,
value:[]
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
    setProducts:(state,action:PayloadAction<Product[]>)=>{
    state.value = action.payload
    },
    setError: (state, action:PayloadAction<Error>)=>{
state.error = action.payload
    },
    setLoading:(state,action:PayloadAction<boolean>)=>{
        state.isloading = action.payload
    }
    }
})
export  const {setProducts,setError,setLoading} = productsSlice.actions
const reducer = productsSlice.reducer
export default reducer