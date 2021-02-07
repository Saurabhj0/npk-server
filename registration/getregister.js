let mongodb = require("mongodb");

let getregister = require("express").Router().post("/",(req,res)=>{

    mongodb.MongoClient.connect("mongodb+srv://npkknots:npkknots@npk.ncdhg.mongodb.net/Npk-Ship?retryWrites=true&w=majority",(err,client)=>{

        if(err) throw err;
        
        else{
            let db=client.db("Npk-Ship");
            db.collection("UserDetail").insertOne({"Name":req.body.Name,
                                                 "MobileNO":req.body.MobileNo,
                                                 "Email_ID":req.body.Email,
                                                 "Password":req.body.Password
                                                },(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"result":"success"});
                }
            });
        }
    });
});

module.exports = getregister;