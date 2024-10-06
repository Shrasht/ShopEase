const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
 fullname:{
    type:String,
    minlength:3,
    trim:true,
 },

surname:String,
 email:String,
 password:String,
 cart:{
    type:Array,
    default:[],
 },
 isAdmin:boolean,
 orders:
{
    type:Array,
    default:[],
},
 Contact_no:number
})