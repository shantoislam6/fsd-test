import { Redis } from 'ioredis';
const client = new Redis(String(process.env.REDIS_URI));

client.on('connect', () => {
  console.log('Connected to Redis server');
});

export default client;
