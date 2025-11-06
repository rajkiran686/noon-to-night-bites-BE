import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  discount: { type: Number, required: true },
  code: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  applicableCategories: [{ type: String, required: true }], // e.g. ["breakfast", "meals"]
}, { timestamps: true });

export default mongoose.model('Offer', offerSchema);
