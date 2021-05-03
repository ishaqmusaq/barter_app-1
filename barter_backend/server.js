const express = require('express')
const http = require('http')
const socketio = require('socket.io');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const dotenv = require('dotenv');


//init app

const app = express();


//bodyPaser middlewares

app.use(express.json());

//load environment variable
dotenv.config({ path: './config.env' });
const server = http.createServer(app);
const io = socketio(server).sockets;


//Dev logging
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"))

}

//Db config file 
const db = config.get('mongoURI');

//connect to mongo db
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })

  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("the homepage has been hit"))
app.use("/api/users", require('./routes/api/users'));
app.use("/api/auth", require('./routes/api/auth'));


const port = process.env.PORT || 5000;
server.listen(port, () => `server started on port ${port}`)

