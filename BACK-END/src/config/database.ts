import mongoose, {connect} from 'mongoose';
import dotenv from 'dotenv';
let conn:any;


dotenv.config();

const connectDB = async()=>{
    try{
       conn = await mongoose.connect(process.env.MONGODB_URI!);
       if(conn.ConnectionStates.connected){
        console.log('Connect to MongoDB');
    }
    }catch(error){
        console.log(`This error occured while trying to connect the MongoDB => ${error}`);
        process.exit(1);
    }
}

export default connectDB;