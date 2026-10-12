const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [3, "Title must be at least 3 characters"],
    maxlength: [100, "Title cannot exceed 100 characters"]
  },
  description: {
    type: String,
    maxlength: [500, "Description cannot exceed 500 characters"],
    default: ""
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  priority: {
    type: Number,
    min: [1, "Priority must be at least 1"],
    max: [5, "Priority cannot exceed 5"],
    default: 3
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
