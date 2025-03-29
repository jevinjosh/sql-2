const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
require("dotenv").config();


const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const NAME = process.env.DB_NAME;
const HOST = process.env.DB_HOST;
const PORT = process.env.PORT;

const sequelize = new Sequelize(NAME, USER, PASSWORD,{
    host: HOST,
    dialect: "mysql"
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connect();
})


const connect = async() => {
    try{
        await sequelize.authenticate();
        console.log("Database connected successfully")
    }
    catch(err){
        console.log(`Error -> ${err}`)
    }
}


module.exports = { sequelize, connect }