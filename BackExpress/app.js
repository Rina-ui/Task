import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';
import taskRoutes from './routes/task.js';

const app = express();

//Database connection
mongoose.connect('mongodb+srv://m40282897:ma-gra12@cluster0.7q1vrxe.mongodb.net/ToDoReact?retryWrites=true&w=majority&appName=Cluster0', {
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

//Middlewars
app.use(cors({
    origin: 'http://localhost:5173', // authorised the frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/task', taskRoutes); 

export default app; 