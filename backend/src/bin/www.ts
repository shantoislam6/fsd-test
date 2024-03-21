#!/usr/bin/env node

// ** Register alias for import modules
import 'module-alias/register';

// ** env config
import '@/configs/env';

/**
 * * Module dependencies.
 */
import http from 'node:http';
import app from '@/app';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;

app.set('port', port);

/**
 * * Create HTTP server.
 */
const server = http.createServer(app);

server.on('error', (err) => {
  throw new Error(err.message);
});

console.log(`Mode ${process.env.NODE_ENV}`);

mongoose
  .connect(String(process.env.MONGODB_CONNECTION))
  .then(() => {
    console.log('Connected to mongodb');
    server.listen(port);
    server.on('listening', () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
