const mongoose = require('mongoose')

const rsvpSchema = new mongoose.Schema({
  owner: { // rsvp has an owner
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = rsvpSchema
