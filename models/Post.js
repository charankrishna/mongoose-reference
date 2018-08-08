var mongoose = require("mongoose");

var PostSchema = mongoose.Schema({
    Tittle:String,
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Comments:[{
        text:String,
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    }]
});

module.exports=mongoose.model("Post",PostSchema);