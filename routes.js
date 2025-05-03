const express=require('express');
const router=express.Router();
const User=require('../models/user');
const Post=require('../models/post');
const Comments=require('../models/comments');

//Adding user
router.post('/users',async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json(user);
    }catch{
        res.status(400).json({error:err.message});
    }
})

//Adding post by user
router.post('/posts',async(req,res)=>{
    try{
        const{title,text,author}=req.body;
        const post=await Post.create({title,text,author});
        res.status(201).json(post);
    }catch{
        res.status(400).json({error:err.message});
    }
})

//Getting posts
router.get('/posts/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        .populate("author","username email")
        .populate({
            path:"comments",
            populate:{path:"author",select:"username"}
        })

        res.status(201).json(post)
    }catch{
        res.status(400).json({error:"post not found"});
    }
})

//Adding comments in posts
router.post('/posts/:id/comments',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({ error: "Post not found" });

        const comment =await Comments.create({
            text:req.body.text,
            author:req.body.author,
            post:post._id
        });

        post.comment.push(comment._id);
        await post.save();

        res.status(201).json(comment);
    }catch{
        res.status(400).json({ error: err.message });
    }
})

//Deleting post & comments together
router.delete('/posts/:id',async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(!post) return res.status(404).json({ error: "Post not found" });

        await Comments.deleteMany(post._id);
        await post.deleteOne();

        res.status(201).json({ message: "Post and related comments deleted." });
    }catch{
        res.status(400).json({ error: err.message });
    }
})

module.exports = router;