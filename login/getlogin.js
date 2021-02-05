let mongodb = require("mongodb");

let search = require("express").Router().post("/",(req,res)=>{

    mongodb.MongoClient.connect("mongodb+srv://npkknots:npkknots@npk.ncdhg.mongodb.net/Npk-Ship?retryWrites=true&w=majority",(err,client)=>{

        if(err) throw err;
        
        else{
            let db=client.db("Npk-Ship");
            db.collection("UserDetail").find( { Email_ID : req.body.Email, Password : req.body.Password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length==0)
                    {
                        res.send({result:"User not found"})
                    }
                    else{
                    res.send(array);
                    }
                }
            });
        }
    });
});

module.exports = search;