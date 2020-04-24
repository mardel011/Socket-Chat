const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventType: {type: String, require: true},
    username: {type: String, require: false},
    date: {type: Date, default: Date.now}
})

const eventHistory = mongoose.model('EventHistory', eventSchema, 'EventHistory');
module.exports = eventHistory;