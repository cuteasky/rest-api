import mongoose from 'mongoose';

const Cerita = mongoose.Schema({
  judul: {
    type: String,
    require: true,
  },
  penulis: {
    type: String,
    require: true,
  },
  kategori: {
    type: String,
    require: true,
  },
  isi_cerita: {
    type: String,
    require: true,
  },
});

export default mongoose.model('Cerita', Cerita);
