import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import state from "../../app/type/state"
import UserState, { User } from "../../app/type/user"
const initialState:UserState = {
isloading:false,
error:null,
value:{}
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
    setUser:(state,action:PayloadAction<User>)=>{
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
export  const {setUser,setError,setLoading} = userSlice.actions
 const reducer = userSlice.reducer
export default reducer