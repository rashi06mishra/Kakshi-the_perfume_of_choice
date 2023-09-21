const express = require('express');
const connectDatabase = require('./database/db');
const Router = require('./Routes/route');
const DefaultData = require('./default');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Router);
//Connecting to database
connectDatabase();

app.listen(5000, () => {
    console.log("listening to port : 5000");
});
DefaultData();