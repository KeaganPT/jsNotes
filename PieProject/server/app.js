require('dotenv').config();

const express = require("express") // --> dependency
// require('./filePathwayName')  // --> file

const db = require("./db");

const app = express();

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/', (req, res) => res.render('index'));

//import controllers as a bundle
const controllers = require("./controllers");

// Parse the body of all requests as JSON
app.use(express.json());

//setting up "/pies" s a endpoint into my pie controller
app.use("/pies", controllers.piecontroller)
app.use("/user", controllers.usercontroller)

db.authenticate()
.then(() => db.sync()) // => {force:true}
.then(() => {
    app.listen(process.env.PORT, () => console.log(`[Server:] App is listening on Port ${process.env.PORT}`));
    })
    .catch((err) => {
        console.log("[server:] Server Crashed");
        console.error(err);
    })