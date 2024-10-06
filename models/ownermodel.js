const mongoose=require('mongoose')

mongoose.connect("mongodb")

const ownerSchema=mongoose.Schema({
 fullname:{
    type:String,
    minlength:3,
    trim:true,
 },

surname:String,
 email:String,
 password:String,

 isAdmin:boolean,
 orders:
{
    type:Array,
    default:[],
},
picture:String,
gstin:String,
});


module.exports=mongoose.model("owner",ownerSchema);