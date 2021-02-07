let express=require("express");

let app = express();

let cors = require("cors");

let bodyparser = require("body-parser");

app.use( cors() );

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

app.use("/getallcourses",require("./Courses/fetch"));

app.use("/search",require("./Courses/search"));

app.use("/login",require("./login/getlogin"));

app.use("/courses/uploadimage",require("./Images/uploadimage"))

app.use("/courses/images", express.static(__dirname +'/public/courses/images'));

app.use("/getcart",require("./UserCart/getcart"));

app.use("/checkemail",require("./registration/checkalreadyregister"));

app.use("/register",require("./registration/getregister"));

let port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("server started");
});