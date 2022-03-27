const express = require("express");
const bdp = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
const enc = bdp.urlencoded({ extended: true });

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/info", enc, (req, res) => {
  let name1 = req.body.abc;
  let name2 = req.body.abcd;
  res.sendFile(__dirname + "/public/sec_page.html");

  var url =
    "mongodb+srv://client1:sandeep200313@cluster0.xmlgn.mongodb.net/testing?retryWrites=true&w=majority";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("database created");
    var dbo = db.db("mydb");
    dbo
      .collection("lovecalculator")
      .insertOne({ name: name1, partner_name: name2 }, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      });
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Application started and Listening on port 3000");
});
