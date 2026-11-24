import mongoose from 'mongoose';
import Product from './models/products.js';
import TeamMember from './models/team.js';
import BlogArticle from './models/blogs.js';

const mongoUri = globalThis.process.env.MONGODB_URI || 'mongodb://localhost:27017/Kopi_Ko';

const products = [
  { slug: 'kopi-ko-latte', name: 'Kopi_Kat', category: 'Coffee', image: '/images/cat-kopi.png', sizes: [{ label: 'Small', price: 145 }, { label: 'Large', price: 175 }] },
  { slug: 'americano', name: 'Americano', category: 'Coffee', image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 120 }, { label: 'Large', price: 150 }] },
  { slug: 'caramel-cold-brew', name: 'Caramel Cold Brew', category: 'Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 160 }, { label: 'Large', price: 190 }] },
  { slug: 'cappuccino', name: 'Cappuccino', category: 'Coffee', image: '/images/cat-kopi.png', sizes: [{ label: 'Small', price: 135 }, { label: 'Large', price: 165 }] },
  { slug: 'mango-refresher', name: 'Mango Refresher', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'berry-citrus-refresher', name: 'Berry Citrus Refresher', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'peach-green-tea', name: 'Peach Green Tea', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 135 }, { label: 'Large', price: 165 }] },
  { slug: 'strawberry-lemonade', name: 'Strawberry Lemonade', category: 'Refreshers', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'iced-matcha-latte', name: 'Iced Matcha Latte', category: 'Non-Coffee', image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Small', price: 155 }, { label: 'Large', price: 185 }] },
  { slug: 'iced-chocolate', name: 'Iced Chocolate', category: 'Non-Coffee', image: '/images/cat-kopi.png', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'vanilla-steamer', name: 'Vanilla Steamer', category: 'Non-Coffee', image: '/images/cat-kopi.png', sizes: [{ label: 'Small', price: 120 }, { label: 'Large', price: 150 }] },
  { slug: 'strawberry-milk', name: 'Strawberry Milk', category: 'Non-Coffee', image: '/images/cat-kopi.png', sizes: [{ label: 'Small', price: 140 }, { label: 'Large', price: 170 }] },
  { slug: 'butter-croissant', name: 'Butter Croissant', category: 'Pastries', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 85 }, { label: 'Box of 2', price: 150 }] },
  { slug: 'cinnamon-roll', name: 'Cinnamon Roll', category: 'Pastries', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 100 }, { label: 'Box of 2', price: 180 }] },
  { slug: 'chocolate-muffin', name: 'Chocolate Muffin', category: 'Pastries', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 90 }, { label: 'Box of 2', price: 160 }] },
  { slug: 'blueberry-scone', name: 'Blueberry Scone', category: 'Pastries', image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=700&q=85', sizes: [{ label: 'Single', price: 85 }, { label: 'Box of 2', price: 150 }] },
];

const team = [
  { name: 'Bana Banana', role: 'Head Barista', detail: 'Bana Barista', image: '/images/team/85ca6042-574c-45b7-a4b8-197022cb02c3.jpg' },
  { name: 'Guiller Jose', role: 'Coffee Roaster', detail: "I don't just roast coffee, I might roast you too", image: '/images/team/jay.jpg' },
  { name: 'Jeriana Ilan', role: 'Barista', detail: 'Head Pastry Chef and Barista', image: '' },
];

const blogArticles = [
  { id: 'morning-brew', category: 'Brewing Guides', title: 'A calmer morning starts with a better cup', excerpt: 'A few small steps can turn your everyday coffee into a slower, more satisfying ritual.', author: 'Kopi_Ko Journal', date: 'May 18, 2025', readTime: '4 min read' },
  { id: 'bean-to-cup', category: 'Behind the Beans', title: 'From carefully chosen beans to your favorite mug', excerpt: 'Get to know the thoughtful steps behind a balanced, comforting cup of coffee.', author: 'The Kopi_Ko Team', date: 'May 12, 2025', readTime: '5 min read' },
  { id: 'iced-coffee', category: 'Brewing Guides', title: 'How to make a smooth iced coffee at home', excerpt: 'Keep your iced coffee full of flavor with a simple brew-and-chill method.', author: 'Kopi_Ko Journal', date: 'May 6, 2025', readTime: '3 min read' },
  { id: 'coffee-pairings', category: 'Pairings', title: 'The little treats that love coffee back', excerpt: 'A guide to pairing your favorite roast with pastries and afternoon snacks.', author: 'Kopi_Ko Journal', date: 'April 28, 2025', readTime: '4 min read' },
  { id: 'latte-at-home', category: 'Brewing Guides', title: 'A cozy latte, even without a fancy machine', excerpt: 'Make a comforting milk-and-coffee favorite with tools you already have.', author: 'The Kopi_Ko Team', date: 'April 20, 2025', readTime: '3 min read' },
  { id: 'coffee-moments', category: 'Coffee Stories', title: 'Why the coffee break is worth keeping', excerpt: 'A small pause can make room for a conversation, a fresh thought, or a quiet moment.', author: 'Kopi_Ko Journal', date: 'April 11, 2025', readTime: '4 min read' },
];



try {
  await mongoose.connect(mongoUri);
  await Product.bulkWrite(products.map((product) => ({
    updateOne: {
      filter: { slug: product.slug },
      update: { $set: product },
      upsert: true,
    },
  })));
  await TeamMember.bulkWrite(team.map((member) => ({
    updateOne: {
      filter: { name: member.name },
      update: { $set: member },
      upsert: true,
    },
  })));
  await BlogArticle.bulkWrite(blogArticles.map((article) => ({
    updateOne: {
      filter: { id: article.id },
      update: { $set: article },
      upsert: true,
    },
  })));
  console.log(`Seeded ${products.length} products into MongoDB.`);
  console.log(`Seeded ${team.length} team members and ${blogArticles.length} blog articles into MongoDB.`);
} catch (error) {
  console.error('MongoDB seed failed:', error.message);
  globalThis.process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}


