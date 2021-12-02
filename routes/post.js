const router = require("express").Router()
const posts = require("../models/post")

router.post("/",async(req,res)=>{
    const newPost = new posts(req.body)
    try{
        const saving = await newPost.save()
        res.status(200).json(saving)

    }catch(err){
        res.status(500).json(err)

    }
})

router.put("/:id",async(req,res)=>{
    try{
        const validation = await posts.findById(req.params.id)
        if(validation.uid === req.body.uid){
            await validation.updateOne({$set:req.body})
            res.status(200).json("Post Updates")
        }else{
            res.status(403).json("Bad Request")
        } 
    }catch(err){
        res.status(500).json(err)
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        const validation = await posts.findById(req.params.id)
        if(validation.uid === req.body.uid){
            await validation.deleteOne()
            res.status(200).json("Post Updates")
        }else{
            res.status(403).json("Bad Request")
        } 
    }catch(err){
        res.status(500).json(err)
    }
})

router.put("/:id/like",async(req,res)=>{
    try{
        const post = await posts.findById(req.params.id)
        if(!post.likes.includes(req.body.uid)){
            await post.updateOne({$push:{likes:req.body.uid}})
            res.status(200).json("I like this")
        }else{
            await post.updateOne({$pull:{likes:req.body.uid}})
            res.status(200).json("I dislike this")
        }

    }catch(err){
        res.status(500).json(err)

    }
})


router.get("/:id",async(req,res)=>{
    try{
        const single = await posts.findById(req.params.id)
        res.status(200).json(single)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router