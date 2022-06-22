const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000

app.listen(PORT, (req,res) => {
    console.log(`app running`.yellow.bold);
});
