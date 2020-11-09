import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://abiona123:abiona123@developedbymike.fgjtl.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
    
    try {
        const resp = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log(`MongoDB connected ${resp.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;