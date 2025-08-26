import express from 'express';
import { performSearch, getDashboardData } from '../controllers/searchController.js';

const router = express.Router();

router.post('/search', performSearch);
router.get('/dashboard', getDashboardData);

export default router;