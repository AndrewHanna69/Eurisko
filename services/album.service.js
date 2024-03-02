const AlbumModel = require('../models/album.model');

const albumService = {
  async addAlbum(name, description, showNbTracks, createdBy) {
    try {
      const newAlbum = new AlbumModel( {name, description, showNbTracks, createdBy} );
      const savedAlbum = await newAlbum.save();
      return savedAlbum;
    } catch (error) {
      throw new Error(`Error creating album: ${error.message}`);
    }
  },

  async updateAlbum(albumId, updatedBy) {
    try {
      const updatedAlbum = await AlbumModel.findByIdAndUpdate(albumId, updatedBy, { new: true });
      return updatedAlbum;
    } catch (error) {
      throw new Error(`Error updating album: ${error.message}`);
    }
  },

  async getAlbum(albumId) {
    try {
      const album = await AlbumModel.findById(albumId);
      if (!album) {
        throw new Error('Album not found');
      }
      return album;
    } catch (error) {
      throw new Error(`Error fetching album: ${error.message}`);
    }
  },

  async deleteAlbum(albumId) {
    try {
      const deletedAlbum = await AlbumModel.findByIdAndDelete(albumId);
      return deletedAlbum;
    } catch (error) {
      throw new Error(`Error deleting album: ${error.message}`);
    }
  }
};

module.exports = { albumService};