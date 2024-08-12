import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : false,
    },
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    mobile : {
        type : Number,
        required : true,
        unique : true,
    }
},{timestamps : true})

export const Admin = mongoose.model("Admin",adminSchema);