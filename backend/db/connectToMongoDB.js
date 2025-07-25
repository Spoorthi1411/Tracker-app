import mongoose from 'mongoose';

const connectTOMongoDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
}

export default connectTOMongoDb;