const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: String,
    description: String,
    showNbTracks: {
      type: Boolean,
      default: false
    },
    lastSongAddedAt: Date,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  }},
    {timestamps:true}
  );
  
  const AlbumModel = mongoose.model('Album', albumSchema);
  
  module.exports = AlbumModel;