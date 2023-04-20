import { createSlice } from "@reduxjs/toolkit";

const data={
    id: null,
    name: null,
    password: null,
    email: null,
}

const initialValue ={
    value: data,
}

export const registerSlice = createSlice({
    name:'register',
    initialState: initialValue,
    reducers: {
        addUser: (state, action)=>{
            state.value.push(action.payload);
        }
    }
})

export const {addUser} =  registerSlice.actions;
export default registerSlice.reducer;