const express=require('express');
const app=express();
//app.use(express.static("app.html"));
app.listen('3000',function(){
    console.log("Server is at 3000. http://localhost:3000/");
})