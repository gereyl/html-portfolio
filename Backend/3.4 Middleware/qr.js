import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

import qr from "qr-image";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function QRGenerator(req, res, next) {
  console.log(req.body);
  const urlAddress = req.body["idk"];
  //const url = new urlAddress.URL;
  var qr_svg = qr.image(urlAddress);
  qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  next();
}



app.use(QRGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your qr code is:</h1><img src="qr_img.png">`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
