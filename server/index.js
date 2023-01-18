// external imports
const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");

// internal exports
const schema = require("./schema/schema");
const connectDB = require("./config/db")


// configuarations
const port = process.env.PORT || 5000;


const app = express();

// db connection
connectDB();

app.use("/graphql", graphqlHTTP(
    {
        schema, 
        graphiql: process.env.NODE_ENV === "development"
    }
))

// listen to port
app.listen(port, console.log(`Server running on port ${port}`))
