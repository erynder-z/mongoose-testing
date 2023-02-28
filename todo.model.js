const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
