import jwt from 'jsonwebtoken'
const JWT_KEY = 'secret'

export const verifyToken = async (req, res, next) =>{
    const token = req.cookies.token;
    
    if(!token){
        return res.status(401).send({msg: "unauthorizes acess"})
    }
    
    jwt.verify(token , JWT_KEY,(err, data)=>{
        if(err){
            return res.status(401).send({msg: "you are not authorised"})
        }
        //return res.send({data, status: "working"})
        req._id = data._id;
        next();
    } )
}
