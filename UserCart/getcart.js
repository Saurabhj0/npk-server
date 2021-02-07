let mongodb = require("mongodb");

let Cart = require("express").Router().post("/",(req,res)=>{

    mongodb.MongoClient.connect("mongodb+srv://npkknots:npkknots@npk.ncdhg.mongodb.net/Npk-Ship?retryWrites=true&w=majority",(err,client)=>{

        if(err) throw err;
        
        else{
            let db=client.db("Npk-Ship");
            db.collection("UserCart").find({Email_ID : req.body.Email_ID}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

module.exports = Cart;