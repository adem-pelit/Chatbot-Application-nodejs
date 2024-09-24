import dotenv from 'dotenv'
import express from 'express'
import session from 'express-session';
import sessionRouter from './routes/Session.router.js';
import cors from 'cors'
import mongoose from 'mongoose';

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL , { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(cors({
    origin: process.env.BACKEND_URL,
    credentials: true
})) 
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);
app.use(express.json())

app.use("/session", sessionRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})