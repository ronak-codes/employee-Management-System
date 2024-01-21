const JWT = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config();
 
const generateAccessToken = (user) => {

    user={
        firstName:"John",
        lastName:"doe",
        employeeId:"605c2a60c8a5be33a8934b8e"
    }
    const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
    const accessToken = JWT.sign(user,SECRET_KEY,{expiresIn:'30m'})

    return accessToken;
}

const authenticateToken = (request,response,next) => {
    try{
        
        let token;
        if(request?.headers?.authorization){
            token=request.headers["authorization"];
        }
        if(request?.headers?.token){
            token=request.headers["token"];
        }
        if(request?.query?.token){
            token = request.query["token"];
        }
        if(token){
            token = token.split(" ")[1];
        }

        const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;

        JWT.verify(token,SECRET_KEY,(error,user)=>{
            if(error){
                return response.status(400).json({msg:"Invalid Token"})
            }
            next();
        })
    }
    catch(error){
        console.log("error is",error);
    }
}


module.exports ={
    generateAccessToken,
    authenticateToken
}

// console.log("token",generateAccessToken())