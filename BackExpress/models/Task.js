import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
} , {
    timestamps: true,});

const Task = mongoose.model('Task', taskSchema);    
export default Task;

