const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 4000;
const cors = require('cors');
const config = require('./DB');
const ServerPortRouter = require('./routes/ServerPortRouter');

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/serverport', ServerPortRouter);

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});


// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const PORT = 4000;
// app.use(cors());
// app.use(bodyParser.json());
// mongoose.connect('mongodb+srv://aditya-m:twaditya123@twitterdata-s8ugt.mongodb.net/test?retryWrites=true&w=majority/twitter', { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })
// app.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });