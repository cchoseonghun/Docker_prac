import express from 'express';
const router = express.Router();

import MemoRouter from './MemoRouter';

router.use('/api/memo', MemoRouter);

export default router;
