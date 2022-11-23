import { Router,Request,Response } from "express";
import { getNextSequence } from "../models/Counter";
import { OrderForm } from "../models/OrderForm";
import {Car} from '../models/Car'
 

const router:Router = Router();

router.post('/', async(req,res)=>{
    try{
        req.body._id = await getNextSequence('carId');
        const record = await Car.insertMany(req.body);
        return res.status(201).json(record);
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
 });

 router.get('/', async(req,res)=>{
    console.log(req.body);
    const record = await Car.find();
    return res.status(201).json(record);
 });

 export default router;