const express = require("express");
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();
const fs = require("fs");
// var mm = require('music-metadata');

const home = require("./routes/home");
app.use(express.json());

dotenv.config({ path: "./.env" });
fs.readdir("./music", (err, files) => {
	files.forEach(file => {
		console.log(file);
		fs.stat(`./music/${file}`,(err,stat)=>{
			if (err) {
				console.log(err);
			} else {
				console.log(stat);
			}
		})
	  });
});

app.use("/", home);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
