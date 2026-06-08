const express=require("express");
const {resend} = require("resend");
const router=express.Router();
const Contact=require("../models/Contact");
const app=express();
app.post("/contact",async (req,res) =>{
    try{
        const {name,email,msg}=req.body;
        const newmsg=new Contact({name,email,msg});
        await newmsg.save();

        await resend.emails.send({
            from:"onboarding@resend.dev",
            to:"process.env.EMAIL",
            subject :"New Query",
            Text:`Name : ${name}\n Email : ${email}\n Message : ${msg}`,
            reply_to:email
        });
        console.log("Email send tHrough resend");
        res.status(200).json({msg:"success"});
    }
    catch(err){
        console.log("Error : ",err);
        res.status(500).json({msg:"Error"});
    }
});
module.exports=router;
