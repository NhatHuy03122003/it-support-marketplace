import { create } from "zustand";
import type { ChatState } from "../types/store";
import { toast } from "sonner";
import chattingServices from "../services/chattingServices";
import type { Message } from "../types/chatting";
import { socket } from "../lib/socket";

export const useChattingStore = create<ChatState>((set, get) => ({
  conversations: [],
  currentConversation: null,
  messages: [],
  loadingConversations: false,
  loadingMessages: false,
  error: null,

  connectSocket: (userId) => {
    if (socket.connected) return;
    socket.connect();
    socket.emit("addNewUser", userId);
    socket.on("getMessages", (msg: Message) => {
      get().addMessage(msg);
    });
  },

  disconnectSocket: () => {
    socket.off("getMessages");
    socket.disconnect();
  },

  joinConversation: (convId) => {
    socket.emit("join_conversation", convId);
  },

  addMessage: (msg) => {
  
    set((state) => {
      // Dùng _id để khớp MongoDB, kiểm tra kỹ field thật trong type Message
      if (state.messages.some((m) => m._id === (msg as any)._id)) return state;

      // Chỉ add nếu đúng conversation đang mở (tránh lẫn tin nhắn đoạn chat khác)
      const { currentConversation } = get();
      console.log(msg);
      
      if (currentConversation && (msg as any).conversation !== currentConversation._id) {
        return state; // TODO: có thể update unread count cho conversation khác ở đây
      }

      return { messages: [...state.messages, msg] };
    });
  },

  getConversations: async (userId: string) => {
    try {
      set({ loadingConversations: true });
      const conversations = await chattingServices.getConversations(userId);
      set({ conversations });
      set({ currentConversation: conversations[0] });
      return conversations;
    } catch (error) {
      console.error("Error fetching conversations:", error);
      toast.error("Không thể tải danh sách cuộc trò chuyện.");
      set({ error: "Failed to load conversations." });
    } finally {
      set({ loadingConversations: false });
    }
  },

  getMessages: async (conversationId) => {
    try {
      set({ loadingMessages: true })
      const messages = await chattingServices.getMessages(conversationId);
      set({
        messages,
        currentConversation:
          get().conversations.find((c) => c._id === conversationId) || null,
      });
      return messages;
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Không thể tải lịch sử trò chuyện.");
      set({ error: "Failed to load messages." });
    } finally {
      set({ loadingMessages: false });
    }
  },

  sendMessage: async (senderId, recipientId, content) => {
    try {
      // 1. Lưu DB qua REST API — trả về message thật từ MongoDB (_id, createdAt,...)
      const newMessage: Message = await chattingServices.sendMessage(
        senderId,
        recipientId,
        content,
      );

      // 2. Set state ngay cho người gửi (UI phản hồi tức thì)
      set((state) => ({ messages: [...state.messages, newMessage] }));

      // 3. Emit cho server relay tới người nhận — khớp server: socket.on("sendMessage", ...)
      socket.emit("sendMessage", newMessage);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Không thể gửi tin nhắn.");
      set({ error: "Failed to send message." });
    }
  },
}));