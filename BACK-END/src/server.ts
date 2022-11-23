import cors from "cors";
import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import https from 'https';
import Counter from "./models/Counter";
import OrderFormRoute from './routes/OrderFormRoute'
import CarRoute from './routes/CarRoute'
import connectDB from "./config/database";
 

const app = express();
connectDB();
const port = 3300;
app.set('view engine','ejs');
app.use(express.json());

app.use(cors({
   origin:'*'
}));

// const path2sd = path.normalize(path.join(__dirname,'../serverdata/server'));

// https.createServer({
//     key:fs.readFileSync(path2sd+'.key'),
//     cert:fs.readFileSync(path2sd+'.cert')
// }, app).listen(port,async()=>{
//     console.log('Server listening on port'+port);
//     conn = await mongoose.connect(process.env.MONGODB_URI!);
//     if(conn.ConnectionStates.connected){
       
//         // const nseq =  await createCounter('todoid');
//         const cEntry = await Counter.exists({_id:'orderFormId'});
//          if(cEntry === null){
//             const nseq =  await createCounter('orderFormId');
//          }
//         console.log('Connect to MongoDB');
//     }
// });

app.listen(port,async()=>{
    console.log('Server listening on port'+port);
        const oEntry = await Counter.exists({_id:'orderFormId'});
        const cEntry = await Counter.exists({_id:'carId'});
         if(oEntry === null){
            const nseq =  await createCounter('orderFormId');
         }
         if(cEntry === null){
            const nseq2 =  await createCounter('carId');
         }
})
 

 app.use('/orderform', OrderFormRoute)
 app.use('/cars', CarRoute)


 //Funksioni CounterID
 async function createCounter(name:string) {
    return await Counter.insertMany([{_id:name, seq:0}]);
}