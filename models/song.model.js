const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: String,
  singer: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategoryModel' 
  },
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AlbumModel' 
  }
});

songSchema.index( {categoryId} );
songSchema.index( {albumId} );

const SongModel = mongoose.model('Song', songSchema);

module.exports = SongModel;