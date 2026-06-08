const express=require("express");
const mongoose=require("mongoose");
const routes=require("./routes/routes");
const app=express();
require("dotenv").config();
app.use(cors({
    origin:"*",
    methods:["GET","POST"]
}));
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("mogoose connected"))
.catch(err=>console.log(err));
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server running or ${PORT}`);
});




