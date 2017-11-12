// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('projectdb', ['projects']);
var bodyParser = require('body-parser');
// public is static. static= js and html
app.use(express.static(__dirname + '/view'));
app.use(bodyParser.json());

//view contact tabular in index .html
app.get('/projects/getall', function (req, res) {
  console.log('I received a GET request');
  db.projects.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});
//add a prject to the database if the end user presses the "Add" button
app.post('/projects/add', function (req, res) {
  console.log('I received a add request');
  console.log(req.body);
  db.projects.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});
// remove bottom: to delete the record from the database
app.delete('/projects/delete/:id', function (req, res) {
  console.log('I received a delete request');
  var id = req.params.id;
  console.log(id);
  db.projects.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});
/*
//edit button
app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.projects.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});
*/
//Update button: update the project data in the database
app.put('/projects/update/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.projects.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {id:req.body.id,name:req.body.name,code:req.body.code,start_date:req.body.start_date,end_date:req.body.end_date,owner:req.body.owner,description:req.body.description}},
    new: true}, function (err, doc) {
      res.json(doc);

    }
  );
});
app.listen(9000);
console.log("Projects node.js Server is running on port 9000");
