const express = require('express')
const connection = require('./configuration/dbconnection')
const app = express();
connection();





const port = 7999
app.listen(port,()=>{
      console.log("app is listening on port",port)
})
