const express = require('express');
const cookieParser = require("cookie-parser")


//Routers required
const  authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/accounts.routes")
const transectionRouter = require("./routes/transection.routes")

const app = express();

//middlewares
app.use(express.json())
app.use(cookieParser())


//Routes
app.use("/api/auth",authRouter);
app.use("/api/accounts",accountRouter);
app.use("/api/transection",transectionRouter)

module.exports = app;