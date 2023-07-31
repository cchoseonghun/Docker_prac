import mongoose from 'mongoose';
const memoSchema = new mongoose.Schema({
    content: String, 
});
export default mongoose.model('Memo', memoSchema);