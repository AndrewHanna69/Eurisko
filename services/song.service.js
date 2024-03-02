const SongModel = require('./models/song.model');
const albumService = require('./album.service');

const songService = {
  async addSong(name, singer, categoryId, albumId) {
    try {
      const foundAlbum = await albumService.findById(albumId);
      if (!foundAlbum) {
        throw new Error('Album not found');
      }
      
      const addedSong = new SongModel( {name, singer, categoryId, albumId} );
      
      await addedSong.save();
      return addedSong;
    } catch (error) {
      throw new Error('Failed to add song to album: ' + error.message);
    }
  },
  
  async deleteSong(songId) {
    try {
      const deletedSong = await SongModel.findByIdAndDelete(songId);
      if (!deletedSong) {
        throw new Error('Song not found');
      }
      return deletedSong;
    } catch (error) {
      throw new Error('Failed to delete song: ' + error.message);
    }
  },
  
  async getAlbumById(albumId) {
    try {
      const album = await albumService.findById(albumId);
      if (!album) {
        throw new Error('Album not found');
      }
      return album;
    } catch (error) {
      throw new Error('Failed to get album by ID: ' + error.message);
    }
  }
};

module.exports = { songService };