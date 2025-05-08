import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connect Mongodb");
})
.catch(()=>{
    console.log("Server not connect Mongodb");
    
});