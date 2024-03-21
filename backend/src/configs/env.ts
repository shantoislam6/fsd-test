import path from 'node:path';
import dotenv from 'dotenv';
dotenv.config({
  path: [path.resolve('.env'), path.resolve('.env.development'), path.resolve('.env.production')],
  override: true,
});
