import mongoose from 'mongoose';

const mongoUri = globalThis.process.env.MONGODB_URI || 'mongodb://localhost:27017/Kopi_Ko';

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

const products = [
  { slug: 'kopi-ko-latte', name: 'Kopi_Ko Latte', category: 'Coffee', image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 145 }, { label: 'Large', price: 175 }] },
  { slug: 'americano', name: 'Americano', category: 'Coffee', image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 120 }, { label: 'Large', price: 150 }] },
  { slug: 'caramel-cold-brew', name: 'Caramel Cold Brew', category: 'Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 160 }, { label: 'Large', price: 190 }] },
  { slug: 'cappuccino', name: 'Cappuccino', category: 'Coffee', image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 135 }, { label: 'Large', price: 165 }] },
  { slug: 'mango-refresher', name: 'Mango Refresher', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'berry-citrus-refresher', name: 'Berry Citrus Refresher', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'peach-green-tea', name: 'Peach Green Tea', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 135 }, { label: 'Large', price: 165 }] },
  { slug: 'strawberry-lemonade', name: 'Strawberry Lemonade', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'iced-matcha-latte', name: 'Iced Matcha Latte', category: 'Non-Coffee', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 155 }, { label: 'Large', price: 185 }] },
  { slug: 'iced-chocolate', name: 'Iced Chocolate', category: 'Non-Coffee', image: 'https://images.unsplash.com/photo-1542990253-a781e04c9772?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'vanilla-steamer', name: 'Vanilla Steamer', category: 'Non-Coffee', image: 'https://images.unsplash.com/photo-1578899952107-9c390f1af8b4?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 120 }, { label: 'Large', price: 150 }] },
  { slug: 'strawberry-milk', name: 'Strawberry Milk', category: 'Non-Coffee', image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef2d9e?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'butter-croissant', name: 'Butter Croissant', category: 'Pastries', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 85 }, { label: 'Box of 2', price: 150 }] },
  { slug: 'cinnamon-roll', name: 'Cinnamon Roll', category: 'Pastries', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 100 }, { label: 'Box of 2', price: 180 }] },
  { slug: 'chocolate-muffin', name: 'Chocolate Muffin', category: 'Pastries', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 90 }, { label: 'Box of 2', price: 160 }] },
  { slug: 'blueberry-scone', name: 'Blueberry Scone', category: 'Pastries', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 85 }, { label: 'Box of 2', price: 150 }] },
];

try {
  await mongoose.connect(mongoUri);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products into MongoDB.`);
} catch (error) {
  console.error('MongoDB seed failed:', error.message);
  globalThis.process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}


