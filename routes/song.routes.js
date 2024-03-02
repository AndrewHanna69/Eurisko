const router = express.Router();
const authMiddleware = require('../controllers/auth.controller');
const { body, param, validationResult } = require('express-validator');
const songController = require('../controllers/song.controller');

router.post('/Album/:albumId/Song', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('singer').trim().notEmpty().withMessage('Singer is required'),
  body('categoryid').trim().notEmpty().withMessage('Category ID is required'),
  body('albumid').trim().notEmpty().withMessage('Album ID is required'),
], addSongToAlbum);

router.delete('/Song/:songId', [
  param('songId').notEmpty().withMessage('Song ID is required'),
], deleteSong);

router.get('/Album/:albumId', [
  param('albumId').notEmpty().withMessage('Album ID is required'),
], getAlbum);

router.get('/Album/:albumId', authMiddleware, songController.getSongsByAlbumId);

module.exports = { router };