import mongoose from "mongoose"

// Load environment variables from the .env file
import 'dotenv/config'


// Function to connect to MongoDB using the specified URI
export async function connectMongoDB(){
    // Construct the MongoDB connection URI with credentials from environment variables
    const uri = `mongodb+srv://kashuliy:${process.env.MONGODB_PASSWORD}@justhavingfundb.ukibmdr.mongodb.net/?retryWrites=true&w=majority`
    try{
        // Attempt to connect to MongoDB using the constructed URI
        await mongoose.connect(uri)

        console.log("Connected to MongoDB")

    } catch (error){
        // Log an error message if the connection attempt fails
        console.error(error)
    }
}

// Define the schema for the User collection in MongoDB
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

// Create and export the User model based on the defined schema
export const userModel = mongoose.model('User', userSchema)

// Export the connectMongoDB function (used for establishing the database connection)
export default connectMongoDB