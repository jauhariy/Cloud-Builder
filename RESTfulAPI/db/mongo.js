import mongoose from "mongoose"

import 'dotenv/config'

export async function connectMongoDB(){
    const uri = `mongodb+srv://kashuliy:${process.env.MONGODB_PASSWORD}@justhavingfundb.ukibmdr.mongodb.net/?retryWrites=true&w=majority`;
    
    try{
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error){
        console.error(error);
    }
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        default: 0
    }
})


export default connectMongoDB; 