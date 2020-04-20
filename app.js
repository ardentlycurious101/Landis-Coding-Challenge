const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

/* ------------------------------------------------ Set up database ------------------------------------------------ */

mongoose.connect("mongodb+srv://elinaluaming:landis123@landis-krbnu.mongodb.net/landisDB", {useNewUrlParser: true, useUnifiedTopology: true});

const clientSchema = {
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  creditScore: {
    type: Number,
    required: true
  },
  savingsBalance: {
    type: Number,
    required: true
  }
};

const Client = mongoose.model("client", clientSchema);

/* ------------------------------------------------ APIs ------------------------------------------------ */

app.get("/", (req, res) => {
  res.redirect("/clients");
});

app.get("/clients", (req, res) => {
  Client.find((err, foundClients) => {
    // get array of mortgage percentages
    const mortagePercentages = getMorgagePercentage(foundClients);

    res.render("client", {
      clientList: foundClients,
      mortagePercentages: mortagePercentages
    });
  })
});

app.get("/statistics", (req, res) => {
  Client.find((err, foundClients) => {
    const mortagePercentages = getMorgagePercentage(foundClients);
    const clientNames = getClientNames(foundClients);

    res.render("statistics", {
      clientNames: clientNames,
      mortagePercentages: mortagePercentages
    });
  })
});

/* ------------------------------------------------ Others ------------------------------------------------ */

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Successfully run server on port 3000.");
});

function getMorgagePercentage(foundClients) {
  var scores = []
  //
  foundClients.forEach((client)=>{
    const S = client.creditScore;
    const B = client.savingsBalance;

    const neededBalance = ((850-S)/850*200000) + 100000;

    if (B > neededBalance) {
      scores.push(100);
    } else {
      scores.push(Math.floor((B/neededBalance)*100));
    }
  })

  return scores
}

function getClientNames(foundClients) {
  var names = []

  foundClients.forEach((client)=>{
    names.push(client.firstName + " " + client.lastName);
  })

  return names
}
