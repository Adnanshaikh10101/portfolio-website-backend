const mongoose=require("mongoose");
const ContactSchema=new mongoose.Schema({
    name:String,
    Email:String,
    msg:String
});
module.exports=mongoose.model("Contact",ContactSchema);