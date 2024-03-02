const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
  },
    {timestamps:true}
  );
  
  const CategoryModel = mongoose.model('Category', categorySchema);
  
  module.exports = CategoryModel;