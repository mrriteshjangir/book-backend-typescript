const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
var cors = require('cors');

// routes
const bookRoute = require('./routes/bookAPI');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
//connect to the database

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/book', bookRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));