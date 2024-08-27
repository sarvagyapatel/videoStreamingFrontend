import { createSlice } from "@reduxjs/toolkit";      
import { currentUser, login, logOut } from "../../service/auth";

const initialState = {                               
    status: false,                                   
    userData: {}                                     
}                                                    
                                                     
const authSlice = createSlice({                      
    name: 'auth',                                    
    initialState,                                    
    extraReducers: (builder) => {
        builder.addCase(currentUser.fulfilled, (state, action)=>{
            state.status,
            state.userData = action.payload
        })
        builder.addCase(login.fulfilled, (state, action)=>{
            state.status = true, 
            state.userData = action.payload
        })
        builder.addCase(logOut.fulfilled, (state)=>{
            state.status = false,
            state.userData = {}
        } )
    }                                                
})                                                   
                                                    
export default authSlice.reducer;                     