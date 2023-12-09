const express = require ("express");
const app = express();
const port = 3000;



app.use(function(req, res, next){
    console.log("kya be !!");
    next();
})

app.use(function(req, res, next){
    console.log("Middleware 2");
    next();
})

app.get("/", (req, res) => {
    res.send("hello motherfuckers");
})

app.get("/profile", (req, res) => {
    res.send("I am a devil assholes")
})

app.listen(port, ()=>{
    console.log(`Example app listning on port ${3000}`)
})