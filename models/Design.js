const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Design title is required"],
    minlength: [3, "Title must be at least 3 characters"],
    maxlength: [100, "Title cannot exceed 100 characters"]
  },
  description: {
    type: String,
    maxlength: [500, "Description too long"],
    default: ""
  },
  category: {
    type: String,
    enum: ['Dress', 'Bag', 'Shoes', 'Accessories', 'Jewelry'],
    default: 'Dress'
  },
  price: {
    type: Number,
    min: [0, "Price cannot be negative"],
    default: 0
  },
  image: {
    type: String,
    default: ""
  },
  designer: {
    type: String,
    default: "Vogue Vibes"
  }
}, { timestamps: true });

module.exports = mongoose.model('Design', designSchema);
