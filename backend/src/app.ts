import express from 'express';
import morgan from 'morgan';
import routes from './routers/routes';
import cors from 'cors';

const app = express();

// Log all requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Register all routes
app.use('/', routes);

export default app;
