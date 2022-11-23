import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TCar } from "../types/AllTypes";
import { RootState } from "./store";

 

export interface Icar {
    cars: TCar[];
}

const InitialState: Icar = {
    cars: [] as TCar[],
};

//Menaxhimi i state me Databaze(MongoDB)

//GET METHOD OF CARS
export const getCarAsync = createAsyncThunk(
    'cars/getCarAsync',

    async ()=> {
        const resp = await axios({
            method: "GET",
            url: "http://localhost:3300/cars",
        });
        if (resp.status === 201){
            return resp.data;
            
        } 
    }
);



export const carSlice = createSlice({
    name: "cars",
    initialState: InitialState,

 //Menaxhimi i state lokalisht
    reducers: {


    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCarAsync.fulfilled,(state,action)=>{
            state.cars = action.payload;
        })
    }

});

export default carSlice.reducer;

export const cars1 = (state: RootState) => state.cars.cars;
// export const {addOrder} = carSlice.actions;

 


