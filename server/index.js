const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;


const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true });
const con = mongoose.connection;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
    con.on('open', () => {
        console.log('Connected to the database successfully');
    })
} catch (error) {
    console.error(error);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})