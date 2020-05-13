var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3030;

var notesArray = require("./db.json")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req,res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req,res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function (req,res) {
    res.sendFile(path.join(__dirname, "db.json"));
});

app.post("/api/notes", function (req,res){
    // var newNotes = req.body;

    // newNotes.push(notesArray)
});

app.delete("/api/notes/:id", function (req,res){

})

app.listen(PORT, function() {
    console.log("App is listening")
});