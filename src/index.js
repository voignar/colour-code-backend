const express = require('express');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(require("./routes/index"));

app.listen(3000);
console.log('Listening on port 3000');