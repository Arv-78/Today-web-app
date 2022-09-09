require('dotenv').config();
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
//require mongoose
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //for json parse

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.gtmuo.mongodb.net/DayDB`)

const DaySchema = new mongoose.Schema({
    title: String, 
    content: String
});

const Day = mongoose.model("Day", DaySchema);

app.post("/data", function(req, res){
    let newTitle = req.body.title;
    let newContent = req.body.content;

    const day = new Day({
        title: newTitle,
        content: newContent
    })
    day.save();
})
app.get("/data", function(req, res){
    Day.find({}, function(err, Data){
        if(!err){
            res.json(Data);
        } else {
            console.log(err);
        }
    });
})

app.delete("/delete", function(req, res){
   const id = req.body.id;
   Day.findOneAndDelete({ _id: id },(err, obj)=>{
    err?console.log(err):console.log(obj);
   });
})

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, function(){
    console.log("server is running on port 5000");
})