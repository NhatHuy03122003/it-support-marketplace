import express from 'express';
import { getConversations } from '../controllers/chattingController';
import { getMessages } from '../controllers/chattingController';
import { sendMessage } from '../controllers/chattingController';
const router = express.Router();

router.get('/conversations',getConversations);
router.get('/messages/:conversationId',getMessages);
router.post('/send',sendMessage);

export default router;