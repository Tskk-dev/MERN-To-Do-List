import mongoose  from "mongoose";

const taskSchema = new mongoose.Schema({ 
    taskName: {
        type: String,
        required: true
    },
    taskTitle: {
        type: String,
        required: true
    },
    taskText: {
        type: String,
        required: true
    },
    taskImage: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true

});

const Task = mongoose.model('Task', postSchema);

export default Task;

