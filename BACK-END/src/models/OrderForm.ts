import mongoose, {Document, model, Schema} from "mongoose";

const orderFormSchema:Schema = new Schema({

    _id:{
        type:mongoose.Schema.Types.String,
        required:true,
        unique:true
    },
    carType:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    fromDate:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    toDate:{
        type:mongoose.Schema.Types.String,
        required:true
    },
})

orderFormSchema.set('timestamps',true);

export type TOrderForm = {
    _id:string,
    carType:string,
    formDate:string,
    toDate:string
}

export interface IOrderForm extends Document{
    _id:string,
    carType:string,
    formDate:string,
    toDate:string
}

export const OrderForm = model<IOrderForm>('OrderForm', orderFormSchema);