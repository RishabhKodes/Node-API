const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

//db connection
mongoose.connect("mongodb+srv://nodeapi_admin:rishabh7130@nodeapi-82uyp.gcp.mongodb.net/nodeapi?retryWrites=true&w=majority", 
                {useNewUrlParser: true}
                )
.then(() => console.log('DB Connected'))

mongoose.connection.on("error", err => {
    console.log("DB connection error-->"+ err.message +'');
});

//to get the post routes
const postRoutes = require('./routes/post.js');


//to get middleware
app.use(morgan("dev"));

app.use("/", postRoutes);

const port = process.env.PORT||8080;
app.listen(port, ()=> {
    console.log('server working on port:'+ port +'');
});

