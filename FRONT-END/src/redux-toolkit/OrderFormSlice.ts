import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { OrderFormType } from "../types/AllTypes";
import { RootState } from "./store";

 

export interface IOrderForm {
    orderform: OrderFormType[];
}

const InitialState: IOrderForm = {
    orderform: [] as OrderFormType[],
};

//Menaxhimi i state me Databaze(MongoDB)


//POST METHOD OF ORDER
export const addOrderFormAsync = createAsyncThunk(
    'orderform/addOrderFormAsycn',
    async(payload:OrderFormType)=>{
        
        const resp = await axios({
            method:'POST',
            url:'http://localhost:3300/orderform',
            headers:{
                'Content-Type':'application/json',
            },
            data: payload
                 
        });
        if (resp.status === 201){
           return resp.data;
        }
    }
)

export const formSlice = createSlice({
    name: "orderform",
    initialState: InitialState,

 //Menaxhimi i state lokalisht
    reducers: {

        addOrder:(state,action)=>{
            state.orderform.push(action.payload);
        }

    },

   
    // extraReducers: (builder) => {
    //     builder.addCase(getFormsAsync.fulfilled, (state, action) => {
    //         // state.forms = action.payload;
    //     });
    //     builder.addCase(addFormAsync.fulfilled, (state, action) => {
    //         // state.forms.push(action.payload);
    //     });
    //     builder.addCase(deletFormAsync.fulfilled, (state, action) => {
    //         // state.forms = state.forms.filter((item)=>item.id !== action.payload);
    //     });
    //     builder.addCase(modifyFormAsync.fulfilled, (state, action) => {
    //         // const idx = state.forms.find((one)=>one.id === action.payload.id) || 0;
    //         // return {
    //         //     ...state, tasks: state.forms.splice(idx as number, 1, action.payload)
    //         // }
    //     });
    // },
});

export default formSlice.reducer;

export const forms = (state: RootState) => state.orderform.orderform;
export const {addOrder} = formSlice.actions;

// //GET-METHOD-REDUX
// export const getFormsAsync = createAsyncThunk("forms/getFormsAsync", async () => {
//     const resp = await axios({
//         method: "GET",
//         url: "http://localhost:3400/forms",
//     });
//     if (resp.status === 201) {
//         return resp.data;
//     }
// });

// //POST-METHOD-REDUX
// export const addFormAsync = createAsyncThunk("forms/addFormAsync", async (payload: OrderFormType) => {
//     console.log(payload);
//     const resp = await axios({
//         method: "POST",
//         url: "http://localhost:3400/forms",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: payload,
//     });

//     if (resp.status === 201) {
//         return resp.data;
//     }
// });

// //PUT-METHOD-REDUX
// export const modifyFormAsync = createAsyncThunk("forms/modifyFormAsync", async (modTask: OrderFormType) => {
//     const resp = await axios({
//         method: "PUT",
//         // url:`http://localhost:3400/forms/${modTask.id}`,
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: modTask,
//     });
//     if (resp.status === 201) {
//         return resp.data;
//     }
// });

// //DELETE-METHOD-REDUX
// export const deletFormAsync = createAsyncThunk("forms/deletFormAsync", async (payload: number) => {
//     const resp = await axios({
//         method: "DELETE",
//         url: `http://localhost:3400/forms/:${payload}`,
//         data: {
//             id: payload,
//         },
//     });

//     if (resp.status === 201) {
//         return payload;
//     }
// });

