const router = express.Router();
const categoryController = require('../controllers/category.controller');

router.post('/Category', categoryController.addCategory);

module.exports = { router };