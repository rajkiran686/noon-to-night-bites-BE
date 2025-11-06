import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  type: String,
  image: String,
  isAvailable: { type: Boolean, default: true },
  isChefSpecial: { type: Boolean, default: false },
  isTodaySpecial: { type: Boolean, default: false },
});

export default mongoose.model('MenuItem', menuItemSchema);
