import express from 'express';

import { getPosts, cretaePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts );
router.post('/', cretaePost);

export default router;