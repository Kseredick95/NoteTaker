var express = require("express");
var path = require("path");
var fs = require("fs")

var app = express();
var PORT = process.env.PORT || 3030;

var notesArray = require("./db/db.json")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    return res.json(notesArray);
});

app.post("/api/notes", function (req, res) {
    let newNotes = req.body;
    notesArray.push(newNotes)

    res.json(newNotes);
});

app.delete("/api/notes/:id", function (req, res) {
    let chosen = req.params.id;
    
    for (var i = 0; i < notesArray.length; i++) {
        if (chosen === notesArray[i].id) {
            notesArray.splice(i, i);
          return res.json(notesArray);
        }
    }
    
      return res.json(false);
})

app.listen(PORT, function () {
    console.log("App is listening")
});