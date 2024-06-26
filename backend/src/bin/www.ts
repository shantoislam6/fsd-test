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
  .connect(String(process.env.MONGODB_CONNECTION), {
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    // set alias
    console.log('Connected to mongodb database successfully yeee');
    server.listen(port);
    server.on('listening', () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => console.log('this is db conn error', err));
