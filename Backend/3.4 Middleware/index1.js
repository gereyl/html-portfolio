import { log } from "console";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //a mappa cimet ahol ez a file helyezkedik el adja vissza
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


/*
bash script
cd a mappaba
npm install  // beallitja a package.json fileban a dependencyket
npm i -g nodemon //globalisan felrakja a nodemont eleg egyszer lefuttatni barhol
nodemon index1.js  //elkezdi futtatni a szervert

*/