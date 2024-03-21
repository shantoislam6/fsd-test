import createExpressApp from 'express';
import morgan from 'morgan';
import routes from './routers/routes';

const app = createExpressApp();

// Log all requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Register all routes

app.use('/', routes);

export default app;

