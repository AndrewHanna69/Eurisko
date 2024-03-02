const categoryService = require('../services/category.service');

const categoryController = {
    async addCategory (req, res) {
    try {
        const { name, description, createdBy } = req.body;

        const newCategory = new categoryService({
        name,
        description,
        createdBy,
        });

        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).json({ error: 'Error adding category' });
    }
}};

module.exports = { categoryController };