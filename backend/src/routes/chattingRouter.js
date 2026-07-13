import express from 'express';
import { getConversations, getMessages, sendMessage } from '../controllers/chattingController.js';

const router = express.Router();

router.get('/conversations/:userId',getConversations);
router.get('/messages/:conversationId',getMessages);
router.post('/send',sendMessage);

export default router;