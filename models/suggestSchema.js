const mongoose = require('mongoose')

const suggestSchema = mongoose.Schema({
  Guild: {
    type: String,
    required: true
  },
  Toggling: {
    type: Boolean,
    required: true
  },
  Channel: {
    type: String,
    required: true
  },
    WbID: {
    type: String,
    required: true
  },
  WbToken: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('suggestSchema', suggestSchema)