import express from 'express';
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'; 

const app =express();

const port = 3000
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello Word");
});

const {users} =JSON.parse(fs.readFileSync("db.json"));
console.log(users);

app.get("/api/users",(req,res)=>{
    try {
        res.status(200).send({message:"succes",data:users})
    } catch (error) {
        res.status(500).send({message:"internal server error"})
    }

});

app.get("/api/users/:id",(req,res)=>{
   
  try { 
    let id =Number(req.params.id);
    const finduser=users.find((user)=>user.id===id)
    if (!finduser) {
      return res.status(404).send({message:"user not found"})
    }
    res.status(200).send({message:"succses",data:finduser})
  } catch (error) {
    res.status(500).send({message:"internal server error"})
  }    
});

app.post('/api/users',(req,res)=>{
    try {
        const newUser=req.body;

        if (!newUser.name && !newUser.age) {
            return res.status(404).send({message:"bad reuest"})
        }
        users.push({id:uuidv4(),...newUser})
        fs.writeFileSync("db.json",JSON.stringify({users}))

        res.status(201).send({message:"user created" , data:newUser})
    } catch (error) {
        res.status(500).send({message:"internal server error"})
    }
});


app.delete("/api/users/:id",(req,res)=>{
    let {id}=req.params;
    try {
        let userIndex =users.findIndex((user)=>user.id==id)

        if (userIndex== -1) {
            res.status(404).send({message:"user not found"})
        }
        users.splice(userIndex,1);
        fs.writeFileSync("db.json",JSON.stringify({users}))
        res.status(200).send({message:"user delete succesfuly"})
    } catch (error) {
        res.status(500).send({message:"internal server error"})
    }
});

app.put("/api/users/:id",(req,res)=>{
    let {id} =req.params ;
    const { users } = JSON.parse(fs.readFileSync("db.json"));
    try {
        let updateUser=req.body;

        let userIndex=users.findIndex((user)=>user.id==id)

        if (userIndex === -1) {
           return res.status(404).send({message:"User not Found"})
        }

        users[userIndex] ={id , ...updateUser};

        fs.writeFileSync("db.json",JSON.stringify({users}))

        res.status(200).send({message:"user update succesfuly" , data:updateUser})
    } catch (error) {
        res.status(500).send({message:"internal server error"})
    }
})

app.patch("/api/users/:id", (req, res) => {
    const { id } = req.params;

    try {
        const data = fs.readFileSync("db.json");
        const { users } = JSON.parse(data);
        const updateData = req.body;
        const userIndex = users.findIndex((user) => user.id === id);

        users[userIndex] = { id, ...updateData };

        fs.writeFileSync("db.json", JSON.stringify({ users }));

        res.status(200).send({
            message: "Student updated successfuly",
            data: userIndex,
        });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});


app.listen(port,()=>{
    console.log(`${port}`);
    
})