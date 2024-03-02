const CategoryModel = require('./models/category.model');

const addCategory = async (name, description) => {
    try {
      const newCategory = new CategoryModel({
        name,
        description
      });

      await newCategory.save();
  
      return newCategory;
    } catch (error) {
      console.error('Error adding category:', error);
      throw error;
    }
  };
  
  const getCategoryById = async (categoryId) => {
    try {
      const category = await CategoryModel.findById(categoryId);
  
      if (!category) {
        throw new Error('Category not found');
      }
  
      return category;
    } catch (error) {
      console.error('Error getting category by ID:', error);
      throw error;
    }
  };
  
  module.exports = {
    addCategory,
    getCategoryById
  };


