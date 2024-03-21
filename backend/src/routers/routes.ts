import { Router } from 'express';
const router = Router();

router.all('/', (req, res) => {
  return res.json({
    success: true,
    sabbir: true,
    shanto: true,
  });
});

// router.use('/docs',swaggerUi.serve);

export default router;
