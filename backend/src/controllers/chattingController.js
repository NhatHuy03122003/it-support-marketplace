import Conversation from "../models/Conversation";
import Message from "../models/Message";

export const sendMessage = async (req, res) => {
  try {
    const { senderId, recidentId, content } = req.body;
    if (!senderId || !recidentId || !content) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    // check if conversation exists
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recidentId] },
    });
    //check if conversation don't exist, create new conversation
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recidentId],
      });
    }
    // create new message
    const message = await Message.create({
      sender: senderId,
      recipient: recidentId,
      content,
    });
    // update last message in conversation
    conversation.lastMessage = message._id;
    await conversation.save();
    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getConversations = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ message: "Missing userId parameter" });
    }
    // find conversations for the user and populate participants and last message details
    const conversations = await Conversation.find({
      participants: userId,
    })
      .populate("participants", "fullname email")
      .populate({
        path: "lastMessage",
        populate: { path: "sender", select: "fullname email" },
      });
    return res.status(200).json(conversations);
  } catch (error) {
    console.error("Error in getConversations:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async(req,res)=>{
    try{
        const { conversationId } = req.params;
        if (!conversationId) {
            return res.status(400).json({ message: "Missing conversationId parameter" });
        }
        // find messages for the conversation and populate sender details
        const messages = await Message.find({
            $or: [
                { sender: conversationId },
                { recipient: conversationId }
            ]
        }).populate("sender", "fullname email");
        return res.status(200).json(messages);
    }catch(error){
        console.error("Error in getMessages:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

