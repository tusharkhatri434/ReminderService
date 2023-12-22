const {createMail} = require("../services/email-service");

const create = async (req,res)=>{
    try {
        const response = await createMail(req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully created"
        })
    } catch (error) {
        res.status(500).json({
            data:{},
            success:false,
            message:"Not created mail something went wrong"
        })
    }
}

module.exports = {
    create,
}