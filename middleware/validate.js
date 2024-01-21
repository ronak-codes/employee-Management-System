
const { employeeId, employeeDetails }= require("./inputFormat.js")

const validateEmployeeId = (request,response,next) =>{
    const {error,value} = employeeId.validate(request.params);
    if(error){
        console.log("error in ID",error);
        return response.status(400).json({error:error.details[0].message})
    }
    next();
}



const validateEmployeeDetails = (request, response, next) => {
    const { error, value } = employeeDetails.validate(request.body);
  
    if (error) {
      return response.status(400).json({ error: error.details[0].message });
    }
    next();
  };

  module.exports ={
    validateEmployeeId,
    validateEmployeeDetails
  }