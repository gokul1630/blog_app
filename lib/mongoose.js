import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
    try {
        const response = await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully!');
        return response;
    } catch (error) {
        throw error;
    }
}

export default dbConnect;
