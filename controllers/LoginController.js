const bcrypt = require("bcrypt");

const User = require("../model/user.model");

const jwt = require("jsonwebtoken");

const loginHandler = async(req,res)=>{
    try {
        const user = await User.findOne({number:req.body.number});
        if(user){
            const result = await bcrypt.compare(req.body.password, user.password)
            if(result){
                const token = jwt.sign(
                    {id:user._id, username: user.username},"secretkey"
                )
                 return res.json({ token, success: true});
            }else{
                return res.json({ msg: "Wrong Password", success: false });
            }
        }else{
            return res.json({msg:"No user found", success:false})
        }
    } catch (error) {
        res.json({msg:error.message})
    }
}

module.exports = loginHandler;