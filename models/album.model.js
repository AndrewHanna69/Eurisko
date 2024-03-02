const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: String,
    description: String,
    showNbTracks: {
      type: Boolean,
      default: false
    },
    lastSongAddedAt: Date,
  },
    {timestamps:true}
  );
  
  const AlbumModel = mongoose.model('Album', albumSchema);
  
  module.exports = AlbumModel;