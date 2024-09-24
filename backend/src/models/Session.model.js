import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
        default: Date.now,
    },
    endTime: Date,
    messages: [
        {
            from: String,
            message: String
        }
    ],
});

const Session = mongoose.model('Session', sessionSchema);

export default Session;
// unique: true,  