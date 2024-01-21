const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const employeeSchema = new Schema({
    employeeId:{
        type:mongoose.Types.ObjectId,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    dateOfBirth:{
        type:String,
    },
    department:{
        type:String,
    },
    position:{
        type:String
    }

},{timestamps:true});

const Employee = mongoose.model("employees",employeeSchema);

// export default Employee
module.exports = Employee