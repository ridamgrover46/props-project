const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const Port = 5000;
 app.use(express.json());
 app.use(cors(
    { origin:"*"}
 ));

// now i will setup the connection with mmongodb:

mongoose.connect("mongodb+srv://ridam:ridam@props.eemvu.mongodb.net/")
.then(()=>
    console.log("mongodb connected")
)
.catch((err)=> 
    console.error("could't connect with mongodb", err)
)



// here i will setup my register route:
app.use("/Register", require("./Routes/Register"))

app.listen(Port,()=>{
    console.log(`server is running on http://localhost:${Port}`);
}
);