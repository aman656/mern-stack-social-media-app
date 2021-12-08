const router = require("express").Router()
const user = require("../models/users")
const bcrypt = require("bcrypt")


router.get('/',(req,res)=>{
    res.send("Auth route")
})




router.post('/register',async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(req.body.password,salt)
        const newUser = new user({
            name:req.body.name,
            email:req.body.email,
            password:hashedpassword
    
        })
    const newbe = await newUser.save()
    res.status(200).json(newbe)
    }catch(err){
        console.log(err)



    }
})

router.post("/login",async(req,res)=>{
    try{
        const finding = await user.findOne({email:req.body.email})
        if(!finding){
            res.status(400).json("user not found.")
        }
        else if(finding){
            const validate = bcrypt.compare(req.body.password,finding.password)
            if(!validate){
                res.status(400).json("Password mis match")
            }else{
                res.status(200).json(finding)

            }


        }
    }catch(err){
            console.log(err)
        }
    })



module.exports =  router