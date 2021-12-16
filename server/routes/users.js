const router = require("express").Router()
const user = require('../models/users')
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")





router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                newpass =  await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,newpass)


            }catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            const updation = await user.findByIdAndUpdate(req.params.id,{
                $set:req.body
            })
            res.status(200).json('Account has been updated')
        }catch(err){
            return res.status(500).json(err)
        }

    }else{
        return res.status(403).json("You can't update this account")
    }

  
})



router.delete("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            await user.deleteOne({_id:req.params.id})
            res.status(200).json('Deleted Successfully')
        }catch(err){
            return res.status(500).json(err)
        }

    }else{
        return res.status(403).json("You can't update this account")
    }

  
})

router.get("/",async(req,res)=>{
  const id = req.query.id
  const uname = req.query.uname
//   var uid = mongoose.Types.ObjectId(id)
    try{
        const fetchinguser = id ? await user.findById(id) : await user.findOne({name:uname})
        const {password,...other} = fetchinguser._doc
        res.status(200).json(other)

    }catch(err){
        res.status(500).json(err)

    }
})


router.put("/:id/follow",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const to = await user.findById(req.params.id)
            const from  = await user.findById(req.body.userId)
            if(!to.followers.includes(req.body.userId)){
                await to.updateOne({$push:{followers:req.body.userId}})
                await from.updateOne({$push:{following:req.params.id}})
                res.status(200).json("Following")
            }else{
                res.status(403).json("Already following")
            }


        }catch(err){
            res.status(500).json(err)

        }
    }else{
        res.status(403).json("Bad Request")

        }
    
})


router.put("/:id/unfollow",async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const to = await user.findById(req.params.id)
            const from  = await user.findById(req.body.userId)
            if(to.followers.includes(req.body.userId)){
                await to.updateOne({$pull:{followers:req.body.userId}})
                await from.updateOne({$pull:{followings:req.params.id}})
                res.status(200).json("Unfollowed")
            }else{
                res.status(403).json("Already following")
            }


        }catch(err){
            res.status(500).json(err)

        }
    }else{
        res.status(403).json("Bad Request")

        }
    
})



module.exports =  router