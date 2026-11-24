import express from 'express';
import mongoose from 'mongoose';
import process from 'node:process';
import productRoutes from './routes/productRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
const port = Number(process.env.PORT) || 5000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Kopi_Ko';

app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', teamRoutes);
app.use('/api', blogRoutes);

try {
  await mongoose.connect(mongoUri);
  app.listen(port, () => {
    console.log(`Product API listening on port ${port}.`);
  });
} catch (error) {
  console.error('Failed to connect to MongoDB:', error.message);
  process.exitCode = 1;
}
