const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    title:String,
    content:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:User},
    comment:{type:mongoose.Schema.Types.ObjectId, ref:Comments}
});

module.exports=mongoose.model("Post",postSchema);