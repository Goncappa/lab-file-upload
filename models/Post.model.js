const mongoose = require('mongoose');
const { Schema, model } = mongoose;

require('../models/User.model.js');

const postSchema = new Schema(
  {
    content: String,
    creatorId: [ { type : Schema.Types.ObjectId, ref: 'User' } ],
    picPath: String,
    picName: String
  },
  {
    timestamps: true
  }
);

module.exports = model('Post', postSchema);