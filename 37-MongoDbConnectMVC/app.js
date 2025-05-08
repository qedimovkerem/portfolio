import express from 'express';
import "dotenv/config";
import "./src/db/dbConnection.js";
import productRouter from './src/routes/productRouter.js';

const port =process.env.PORT || 3001

const app= express();
app.use(express.json())

app.use("/api/products",productRouter)

app.get ("/",(req,res)=>{
    res.send("af-108")
})

app.listen(port, ()=>{
    console.log(`Server is run ${`http://localhost:${port}`}`);
    
})