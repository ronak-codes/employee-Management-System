
const Joi = require("joi")

const employeeId = Joi.object({
    employeeId: Joi.string().alphanum().length(24).hex().required()
})

const employeeDetails = Joi.object({
    employeeId: Joi.string().alphanum().length(24).hex().required(),
    firstName:Joi.string().min(3).max(25).required(),
    lastName:Joi.string().min(3).max(25).required(),
    email:Joi.string().email().required(),
    dateOfBirth:Joi.date().iso().optional(),
    department:Joi.string().min(2).max(20).optional(),
    position:Joi.string().min(3).max(20).optional()
})

module.exports ={
    employeeId,
    employeeDetails
}


