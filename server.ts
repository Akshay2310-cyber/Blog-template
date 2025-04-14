import express from 'express';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || 'your-fallback-secret',
    express: app,
    // Only add this if you're definitely using MongoDB
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost/payload-cms',
  });

  // Add your own express routes here if needed
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

start();