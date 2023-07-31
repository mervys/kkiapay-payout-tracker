// 'use strict'
const bcrypt = require("bcrypt");

const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 6300;
const saltRounds = 10;

app.get("/db", (req, res) => {
  console.log(req.query);
  const db = new sqlite3.Database("payout-tracker.db", (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the in-memory SQlite database.");
  });
  res.send("Connected to the in-memory SQlite database.");
});

app.post("/sign", async (req, res) => {
  const db = new sqlite3.Database("payout-tracker.db");
  console.log(req.query);
  /*
recuperer des données
*/
  const email = req.body.email;
  const password = req.body.password;
  /*
Vérification des champs
*/
  if (email == undefined || password == undefined) {
    res.status(400).send({ error: "something failed" });
  }

  /*
    encrypter mpass
  */

  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);

  /*
Verifier si l'email est déjà utiisée
*/
  const emailExists = verifyEmailExists(email);
  if (emailExists) {
    res.status(409).send({ error: "Email exists" });
  }
  /*
enregistrement de l'utilisateur
*/
  db.run(`INSERT INTO user(mail, password) VALUES(?, ?)`, [
    email,
    hashPassword,
  ]);

  db.close();

  res.send({ success: "create acount" });
});

app.post("/surname", (req, res) => {
  console.log(req);
  const name = req.body.name;
  const forename = req.body.forename;

  res.send("Nom:" + name + "  Prénom:" + forename);
});

app.get("/axios", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/2")
    .then(function (response) {
      //   console.log(response.data);
      res.send(response.data);
    });
});

app.post("/axio", async (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "foojj",
      body: "bar",
      userId: "3",
    })
    .then((response) => {
      console.log(response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  //ASYNC - AWAIT

  let response = await axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "foojj",
      body: "bar",
      userId: "3",
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log(response.data);

  res.send(response.data);

  //   const URL = "https://jsonplaceholder.typicode.com/posts";
  //   const data = { title: "foo", body: "bar", userId: "1" };
  //   const response = axios.post(data);
  //   const headers = { "content-type": "application/json" };
});

async function verifyEmailExists(email) {
  const rows = db.all(
    `SELECT * FROM user WHERE mail=?`,
    [email],
    (err, rows) => {
      if (err) {
        return true;
      }
      return rows.length > 0;
    }
  );
}

app.listen(PORT, () => {
  console.log("le serveur est : http://localhost:" + PORT);
});
