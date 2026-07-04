import api from "../lib/axios";

const chattingServices = {
  getConversations: async (userId:string) => {
    const response = await api.get(`/chat/conversations/${userId}`, {
      withCredentials: true,
    });
    return response.data;
  },
  getMessages: async (conversationId: string) => {
    const response = await api.get(`/chat/messages/${conversationId}`, 
      {withCredentials:true,}
    );
    return response.data;
  },
  sendMessage: async (senderId:string, recipientId:string, content: string) => {
    const response = await api.post(
      `/chat/send`,
      { senderId, recipientId, content },
      { withCredentials: true },
    );
    return response.data;
  },
  createConversation: async (recipientId: string) => {
    const response = await api.post(
      "/chat/conversations",
      { recipientId },
      { withCredentials: true },
    );
    return response.data;
  },
};

export default chattingServices;
