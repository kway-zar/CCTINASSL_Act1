import process from 'node:process'
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ['Coffee', 'Refreshers', 'Non-Coffee', 'Pastries'],
  },
  sizes: [{
    _id: false,
    label: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
  }],
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

const products = [
  { slug: 'house-latte', name: 'Kopi_Ko Latte', category: 'Coffee', sizes: [{ label: 'Small', price: 145 }, { label: 'Large', price: 175 }] },
  { slug: 'americano', name: 'Americano', category: 'Coffee', sizes: [{ label: 'Small', price: 120 }, { label: 'Large', price: 150 }] },
  { slug: 'caramel-cold-brew', name: 'Caramel Cold Brew', category: 'Coffee', sizes: [{ label: 'Small', price: 160 }, { label: 'Large', price: 190 }] },
  { slug: 'cappuccino', name: 'Cappuccino', category: 'Coffee', sizes: [{ label: 'Small', price: 135 }, { label: 'Large', price: 165 }] },
  { slug: 'mango-refresher', name: 'Mango Refresher', category: 'Refreshers', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'berry-refresher', name: 'Berry Citrus Refresher', category: 'Refreshers', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'peach-green-tea', name: 'Peach Green Tea', category: 'Refreshers', sizes: [{ label: 'Small', price: 135 }, { label: 'Large', price: 165 }] },
  { slug: 'strawberry-lemonade', name: 'Strawberry Lemonade', category: 'Refreshers', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'matcha-latte', name: 'Iced Matcha Latte', category: 'Non-Coffee', sizes: [{ label: 'Small', price: 155 }, { label: 'Large', price: 185 }] },
  { slug: 'iced-chocolate', name: 'Iced Chocolate', category: 'Non-Coffee', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'vanilla-steamer', name: 'Vanilla Steamer', category: 'Non-Coffee', sizes: [{ label: 'Small', price: 120 }, { label: 'Large', price: 150 }] },
  { slug: 'strawberry-milk', name: 'Strawberry Milk', category: 'Non-Coffee', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'butter-croissant', name: 'Butter Croissant', category: 'Pastries', sizes: [{ label: 'Single', price: 85 }, { label: 'Box of 2', price: 150 }] },
  { slug: 'cinnamon-roll', name: 'Cinnamon Roll', category: 'Pastries', sizes: [{ label: 'Single', price: 100 }, { label: 'Box of 2', price: 180 }] },
  { slug: 'chocolate-muffin', name: 'Chocolate Muffin', category: 'Pastries', sizes: [{ label: 'Single', price: 90 }, { label: 'Box of 2', price: 160 }] },
  { slug: 'blueberry-scone', name: 'Blueberry Scone', category: 'Pastries', sizes: [{ label: 'Single', price: 85 }, { label: 'Box of 2', price: 150 }] },
]

try {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/', {
    dbName: process.env.MONGODB_DB || 'Kopi_Ko',
  })

  await Product.bulkWrite(products.map((product) => ({
    updateOne: {
      filter: { slug: product.slug },
      update: { $set: product },
      upsert: true,
    },
  })))

  console.log(`Seeded ${products.length} products into the products collection.`)
} catch (error) {
  console.error('MongoDB seed failed:', error.message)
  process.exitCode = 1
} finally {
  await mongoose.disconnect()
}