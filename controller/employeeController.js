const mongoose = require("mongoose")
const Employee = require("../models/employeeModel.js")


const createEmployee = async (request,response) => {

        try{        
            let employeeId = new mongoose.Types.ObjectId(request.body.employeeId);
            request.body = {...request.body,employeeId}
            const result = await new Employee(request.body);
            await result.save();
            return response.status(200).json({msg:"Employee Created Successfully"});
        }catch(error){
            console.log("error is",error)
            return response.status(500).json({msg:"Failed to create an Employee"});
        }

}

 const getAllEmployee  = async (request,response) =>{
        try{
            const filterConditions = {};
            if(request?.query){
                for (const key in request.query) {
                    if (key !== 'sort' && key !== 'order'&& key!=='page' && key!=='limit') {
                    filterConditions[key] = request.query[key];
                    }
                }
            }

            const sortBy = request?.query?.sort ? { [request.query.sort]: parseInt(request?.query?.order) || 1 } : {};
            const page = request?.query?.page || 1;
            const limit  = request?.query?.limit || 5 ;
            let skip = (page-1)*limit;
            const result = await Employee.find(filterConditions).collation({ locale: 'en_US', strength: 2 }).sort(sortBy).skip(skip).limit(limit);
            return response.status(200).json(result);
        }catch(error){
            console.log("error",error)
            return response.status(500).json({msg:"Failed to retrieve list of employee"})
        }
}

const getEmployeeById = async (request,response) => {
            try{

                const employeeId = request?.params?.employeeId
                const result = await Employee.find({employeeId});
                return response.status(200).json(result);

            }catch(error){
                console.log("error is ",error)
                return response.status(500).json({msg:"cannot find employee for given id"})
            }
}

const updateEmployeeById = async (request,response) =>{
            try{
                const result = await Employee.findOneAndUpdate({employeeId:request.params.employeeId},{$set:request.body})
                return response.status(200).json(result);

            }catch(error){
                return response.status(500).json({msg:"Cannot Update Employee"})
            }
}

const deleteEmployeeById = async (request,response) =>{
            try{
                const result = await Employee.deleteOne({employeeId:request.params.employeeId})
                return response.status(200).json(result);
            }catch(error){
                return response.status(500).json({msg:"Cannot Delete the Employee"});
            }
}


module.exports = {

    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
}
