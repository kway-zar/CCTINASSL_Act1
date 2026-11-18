import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ['Coffee', 'Refreshers', 'Non-Coffee', 'Pastries'],
  },
  image: { type: String },
  sizes: [{
    _id: false,
    label: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
  }],
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
