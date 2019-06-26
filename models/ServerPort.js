const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
  no_positive_tweets: {
    type: Number
  },
  no_negative_tweets: {
      type: Number
  },
  male_positive_tweets: {
    type: Number
 },
  female_positive_tweets: {
    type: Number
 },
  male_negative_tweets: {
    type: Number
},
  female_negative_tweets: {
    type: Number
}
},{
    collection: 'twitterdata'
});

module.exports = mongoose.model('ServerPort', ServerPort);