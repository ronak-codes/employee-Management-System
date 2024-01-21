const supertest = require("supertest")
const app = require("../index")
const dotenv = require("dotenv")
dotenv.config()
const request = supertest(app)



// describe("Employee Routes", () => {
//     let USERNAME = encodeURIComponent(process.env.DATABASE_USERNAME);
//     let PASSWORD = encodeURIComponent(process.env.DATABASE_PASSWORD);
//     const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@blogapp.ntkg8ag.mongodb.net/employeeDatabaseTest?retryWrites=true&w=majority`;

//     before(async () => {
//         try {
//             await mongoose.connect(URL);
//             await Employee.deleteMany({});
//         } catch (error) {
//             console.error('Error setting up test environment:', error);
//         }
//     });

//     after(async () => {
//         try {
//             await mongoose.disconnect();
//         } catch (error) {
//             console.error('Error disconnecting from the test database:', error);
//         }
//     });

// })

describe("GET /employees", () =>{
    it("should get list of employee", async () =>{
        const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJkb2UiLCJlbXBsb3llZUlkIjoiNjA1YzJhNjBjOGE1YmUzM2E4OTM0YjhlIiwiaWF0IjoxNzA1ODI5NzEzLCJleHAiOjE3MDU4MzE1MTN9.dKzzOK8T22Y3FH6OHrIuru1a2XlMzSZzBVz-_gutPK4";
        const response = await request.get("/employees").set("Authorization",authToken)
        response.status.should.equal(200)
        response.body.should.be.an.Array();
        response.body.array.forEach(employee => {
            employee.should.have.properties('firstName','lastName','employeeId','email')
            employee.firstName.should.be.a.String();
            employee.lastName.should.be.a.String();
            employee.email.should.be.a.String();
            employee.employeeId.should.be.a.String().and.have.length(24);
        });
    })
})


describe("GET /employees/:employeeId", () =>{
    it("should get list of employee", async () =>{
        const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJkb2UiLCJlbXBsb3llZUlkIjoiNjA1YzJhNjBjOGE1YmUzM2E4OTM0YjhlIiwiaWF0IjoxNzA1ODI5NzEzLCJleHAiOjE3MDU4MzE1MTN9.dKzzOK8T22Y3FH6OHrIuru1a2XlMzSZzBVz-_gutPK4";
        const response = await request.get("/employees/:employeeId").set("Authorization",authToken)
        response.status.should.equal(200)
        response.body.should.be.an.Array();
        response.firstName.should.be.a.String();
        response.lastName.should.be.a.String();
        response.email.should.be.a.string();
        response.employeeId.should.be.a.String().and.have.length(24)
    })
})


describe("POST /employees/:employeeId", () =>{
    it("should get list of employee", async () =>{
        const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJkb2UiLCJlbXBsb3llZUlkIjoiNjA1YzJhNjBjOGE1YmUzM2E4OTM0YjhlIiwiaWF0IjoxNzA1ODI5NzEzLCJleHAiOjE3MDU4MzE1MTN9.dKzzOK8T22Y3FH6OHrIuru1a2XlMzSZzBVz-_gutPK4";
        const response = await request.post("/employees/:employeeId").set("Authorization",authToken).send({
            employeeId:"605c2a60c8a5be33a8934b7e",
            firstName:"Jack",
            lastName:"Sparrow",
            email:"sparrow@gmail.com",
            dateOfBirth:"1990-01-01",
            department:"mydept",
            position:"Junior"
        })
        response.status.should.equal(200)
        response.body.should.be.an.Object();
        response.body.should.have.property("msg");
        response.msg.should.equal("Employee Created Successfully")
    })
})





