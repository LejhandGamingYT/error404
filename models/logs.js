const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
  Guild: {
    type: String,
    required: true
  },
  Toggling: {
    type: Boolean,
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

module.exports = mongoose.model('logSchema', logSchema)