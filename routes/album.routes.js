const albumController = require('../controllers/album.controller');
const router = express.Router();

router.post('/Album', albumController.addAlbum);

router.put('/Album/:id', albumController.updateAlbum);

router.get('/Album/:id', albumController.getAlbum);

router.delete('/Album/:id', albumController.deleteAlbum);

module.exports = { router };

