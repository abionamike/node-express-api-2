import express from 'express';
import { get_Users, get_A_User, post_Users, update_Users, delete_Users } from '../controllers/userController.js';

const router = express.Router();

router.get('/', get_Users); 
router.get('/:id', get_A_User);

router.post('/', post_Users);

router.put('/:id', update_Users);

router.delete('/:id', delete_Users);

export default router;