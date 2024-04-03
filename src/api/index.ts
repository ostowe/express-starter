
import express from 'express';
import emoji from './emoji';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello API!',
  });
});

router.use('/emoji', emoji);

export default router;