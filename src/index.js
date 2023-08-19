const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(require("./routes/index"));

app.listen(process.env.PORT);
console.log('Listening on port ' + process.env.PORT);