const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/shopease")
.then(function(){
    console.log("Connected")
})
.catch(function(err){
    console.err("Error")
})


module.exports=mongoose.connections;