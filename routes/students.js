const express=require('express');
const router=express.Router();
const url= require("url");
const http= require("http");
const studentsSchema=require('../models/students');
//const fs=require("fs");
router.post('/createData',function(req,res){
    console.log(req.body);
    const studentsData = new studentsSchema(req.body);
    studentsData.save(function(err){
        if(err){
            console.log("error occured",err);
        }else{
           console.log("Data saved successfully");
           res.send({"result":"success"});
        }
    });

});

router.get("/getStudentDetails", function (req, res) {
    studentsSchema.find({}, //if empty all will be shown orelse the mentioned name 
    { _id:0 , __v:0 ,data:0},   //to remove id and v
    function (err, data) {
        if (err) {
            console.log("error ocurred", err);
          } else {
            res.send(data);
        }
    });
});





/**
 * PUT request
 * router.put
 * Mongoose method:= .findOneAndUpdate
 */


//creating routes  


 router.put("/updateDetails", function (req, res) {
    console.log(req.body);
    
    studentsSchema.findOneAndUpdate(
      { collegeName: req.body.collegeName },
      { name: req.body.query.name },
      {
        new: true, // return updated doc
        runValidators: true, // validate before update
      },
      function (err) {
        if (err) {
          console.log(err);
        } else {
          res.send("Student details updated successfully");
        }
      }
    );
   
});




module.exports=router;