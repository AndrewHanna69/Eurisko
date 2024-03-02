const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }},
    {timestamps:true}
  );
  
  const CategoryModel = mongoose.model('Category', categorySchema);
  
  module.exports = CategoryModel;