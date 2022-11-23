import { Router,Request,Response } from "express";
import { getNextSequence } from "../models/Counter";
import { OrderForm } from "../models/OrderForm";
 

const router:Router = Router();

router.post('/', async(req,res)=>{
    try{
        req.body._id = await getNextSequence('orderFormId');
        const record = await OrderForm.insertMany(req.body);
        return res.status(201).json(record);
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
 });

 export default router;