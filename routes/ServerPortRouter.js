const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('../models/ServerPort');

// ServerPortRouter.route('/add').post(function (req, res) {
//   const serverport = new ServerPort(req.body);
//   serverport.save()
//     .then(serverport => {
//         res.json('Server added successfully');
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

ServerPortRouter.route('/serverports').get(function (req, res) {
    ServerPort.find(function (err, serverports){
    if(err){
      console.log("Data could not be fetched successfully" );
    }
    else {
      res.json(serverports);
      console.log("Data fetched successfully.")
    }
  });
});

module.exports = ServerPortRouter;