import express from 'express';
import payment from './src/routes/productRoute.js'
import cardRoutes from './src/routes/productRoute.js'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({path:'.env'})
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/v1',payment)
app.use('/api/v1', cardRoutes);



export default app;
