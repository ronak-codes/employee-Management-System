const express = require("express")
const { createEmployee, deleteEmployeeById, getAllEmployee, getEmployeeById, updateEmployeeById } = require("../controller/employeeController.js")
const { authenticateToken } = require("../authentication/authenticate.js")
const { validateEmployeeId ,validateEmployeeDetails} = require("../middleware/validate.js")

const router = express.Router();


router.get("/employees",authenticateToken,getAllEmployee)

router.get("/employees/:employeeId",authenticateToken,validateEmployeeId,getEmployeeById)

router.post("/employees",authenticateToken,validateEmployeeDetails,createEmployee)

router.put("/employees/:employeeId",authenticateToken,validateEmployeeDetails,updateEmployeeById)

router.delete("/employees/:employeeId",authenticateToken,validateEmployeeId,deleteEmployeeById)

module.exports = router

