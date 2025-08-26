import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema({
  keyword: { type: String, required: true },
  results: { type: Array, required: true }, 
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Search', searchSchema);