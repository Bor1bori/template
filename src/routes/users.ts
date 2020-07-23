import express from 'express';
import * as usersController from '../controllers/users';

const router = express.Router();

/* GET users listing. */
router.get('/', usersController.getUsers);

export default router;
