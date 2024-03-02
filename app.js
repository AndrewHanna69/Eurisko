const mongoose = require('mongoose');
const CategoryService = require('./services/category.service');
const AlbumService = require('./services/album.service');
const SongService = require('./services/song.service');

async function connect (){
try {
    await mongoose.connect('mongodb://localhost:27017');
    console.log('MongoDB Connected');
    } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    }
};

const testFunction = async () => {
    try {
      const popCategory = await CategoryService.addCategory({ name: 'Pop', description: 'Pop music category' });
      const jazzCategory = await CategoryService.addCategory({ name: 'Jazz', description: 'Jazz music category' });
  
      const myAlbum = await AlbumService.addAlbum({ name: 'My Album', description: 'My Album Description' });
      const tempAlbum = await AlbumService.addAlbum({ name: 'Temp Album', description: 'Temp Album Description' });
  
      await Promise.all([
        SongService.addSong({ name: 'Song 1', singer: 'Singer 1',  categoryId: popCategory._id }),
        SongService.addSong({ name: 'Song 2', singer: 'Singer 2',  categoryId: popCategory._id }),
        SongService.addSong({ name: 'Song 3', singer: 'Singer 3',  categoryId: popCategory._id }),
        SongService.addSong({ name: 'Song 1', singer: 'Singer 1',  categoryId: jazzCategory._id }),
        SongService.addSong({ name: 'Song 2', singer: 'Singer 2',  categoryId: jazzCategory._id }),
        SongService.addSong({ name: 'Song 3', singer: 'Singer 3',  categoryId: jazzCategory._id })
      ]);

      await AlbumService.deleteAlbum({ _id: tempAlbum._id });
  
      const songsOfMyAlbum = await SongService.find({ album: myAlbum._id });
      const finalSongOfMyAlbum = songsOfMyAlbum[songsOfMyAlbum.length - 1];
      await SongService.deleteSong({ _id: finalSongOfMyAlbum._id });
  
      console.log('Test completed successfully');
    } catch (error) {
      console.error('Error performing test:', error);
    }
  };
  
  connect ();
  testFunction ();

