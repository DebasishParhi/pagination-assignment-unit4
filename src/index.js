const express = require("express")
const nodemailer = require("nodemailer");
const app = express()

app.use(express.json())

const userController = require("./controllers/user-controller")
app.use("/users",userController)
// const adminController = require("./controllers/admin-controller")
// app.use("/admins",adminController)


module.exports=app;