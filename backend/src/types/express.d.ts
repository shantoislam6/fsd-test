import 'express';
import 'node:util/types';

declare global {
  namespace Express {
    interface Request {}

    interface Response {}
  }
  let PORT: number;
}
