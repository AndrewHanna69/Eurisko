const albumService = require('../services/album.service');

const albumController = {

    async addAlbum(req, res) {
        try {
        const { name, description, showNbTracks, createdBy } = req.body;
        const createdAlbum = await albumService.addAlbum(name, description, showNbTracks, createdBy);
        res.status(201).json(createdAlbum);
        } catch (error) {
        res.status(500).json({ error: error.message });
     }
    },

    async updateAlbum(req, res) {
        try {
        const { id } = req.params;
        const {albumId, updatedBy} = req.body;
        const updatedAlbum = await albumService.updateAlbum(id, albumId, updatedBy);
        res.json(updatedAlbum);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    },

    async getAlbum(req, res) {
        try {
          const { id } = req.params;
          const album = await albumService.getAlbum(id);
          res.json(album);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
      },

    async deleteAlbum(req, res) {
        try {
          const { id } = req.params;
          const deletedAlbum = await albumService.deleteAlbum(id);
          res.json(deletedAlbum);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    };

module.exports = { albumController };