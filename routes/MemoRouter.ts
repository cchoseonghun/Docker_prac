import express from 'express';
const router = express.Router();

import MemoController from '../controllers/MemoController';
const memoController = new MemoController();

router.get('/', memoController.getData);

export default router;
