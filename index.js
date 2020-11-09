import express from 'express'
import connectDB from './db/db.js';
import userRoute from './routes/userRoutes.js'

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));