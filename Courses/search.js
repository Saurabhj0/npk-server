let mongodb = require("mongodb");

let search = require("express").Router().post("/",(req,res)=>{

    mongodb.MongoClient.connect("mongodb+srv://npkknots:npkknots@npk.ncdhg.mongodb.net/Npk-Ship?retryWrites=true&w=majority",(err,client)=>{

        if(err) throw err;
        
        else{
            let db=client.db("Npk-Ship");
            db.collection("Courses").find( { Category : req.body.Category, Tags : req.body.input}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length==0)
                    {
                        res.send({result:"No result Found"})
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