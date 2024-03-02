const { validationResult } = require('express-validator');
const songService = require('../services/song.service');

const songController = {

     async findSongById (req, res, next) {
        try {
          const { songId } = req.params;
          const song = await songService.findSongById(songId);
          if (!song) {
            return res.status(404).json({ error: 'Song not found' });
          }
          req.foundSong = song;
          next();
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },

    async addSongToAlbum (req, res) {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, singer, categoryId, albumId } = req.body;
            const song = new songService({ name, singer, categoryId, albumId });
            await song.save();
            res.status(201).json(song);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteSong (req, res) {
        try {
          const { songId } = req.params;
          const song = await songService.findById(songId);
          if (!song) {
            return res.status(404).json({ error: 'Song not found' });
          }
      
          if (song.albumid !== req.params.albumId) {
            return res.status(400).json({ error: 'Song does not belong to the specified album' });
          }
      
          await songService.findByIdAndDelete(songId);
          res.status(200).json({ message: 'Song deleted successfully' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },

    async getAlbum (req, res) {
    try {
        const album = await songService.getAlbumById(req.params.albumId);
        if (!album) {
        return res.status(404).json({ error: 'Album not found' });
        }
        res.status(200).json(album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }}
};

exports.getSongsByAlbumId = async (req, res) => {
    try {
        const { albumId } = req.params;
        const { category } = req.query;

        let query = { albumId };

        if (category) {
            query.category = category;
        }

        const songs = await songService.find(query).sort({ createdAt: -1 });

        res.json({ songs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { songController };